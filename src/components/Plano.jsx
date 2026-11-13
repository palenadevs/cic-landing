import { useMemo } from 'react'
import './Plano.css'

// Planos de loteo dibujados a partir de una semilla (el nombre del proyecto),
// así cada uno sale distinto pero siempre igual entre recargas.

function azarDesde(texto) {
  let h = 2166136261
  for (const c of texto) h = Math.imul(h ^ c.charCodeAt(0), 16777619)
  return () => {
    h = (h + 0x6d2b79f5) | 0
    let t = Math.imul(h ^ (h >>> 15), h | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const sumar = (a, b) => [a[0] + b[0], a[1] + b[1]]
const escalar = (a, k) => [a[0] * k, a[1] * k]
const mezclar = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]

function normal(a, b) {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const largo = Math.hypot(dx, dy)
  return [dy / largo, -dx / largo]
}

function desplazar(a, b, distancia) {
  const n = escalar(normal(a, b), distancia)
  return [sumar(a, n), sumar(b, n)]
}

function trazo(puntos, cerrado = false) {
  const d = puntos.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L ')
  return `M ${d}${cerrado ? ' Z' : ''}`
}

function centro(puntos) {
  const s = puntos.reduce((acc, p) => sumar(acc, p), [0, 0])
  return escalar(s, 1 / puntos.length)
}

function curvasDeNivel(azar, ancho, alto, cantidad) {
  return Array.from({ length: cantidad }, (_, k) => {
    const y0 = (alto / cantidad) * (k + 0.5)
    const fase = azar() * 6
    const amplitud = 8 + azar() * 16
    const puntos = []
    for (let x = -20; x <= ancho + 20; x += 16) {
      puntos.push([x, y0 + Math.sin(x / 150 + fase) * amplitud + Math.sin(x / 50 + k) * 3])
    }
    return trazo(puntos)
  })
}

function calle(a, b, ancho, nombre) {
  const angulo = (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI
  const medio = mezclar(a, b, 0.5)
  return {
    bordes: [trazo(desplazar(a, b, ancho / 2)), trazo(desplazar(a, b, -ancho / 2))],
    eje: trazo([a, b]),
    nombre,
    etiqueta: { x: medio[0], y: medio[1], angulo },
  }
}

// Una fila de lotes que da a la calle a-b
function franja(azar, a, b, cantidad, profundidad, primerNumero) {
  const pesos = Array.from({ length: cantidad }, () => 0.8 + azar() * 0.4)
  const total = pesos.reduce((s, p) => s + p, 0)
  const cortes = [0]
  pesos.reduce((acc, p) => {
    cortes.push((acc + p) / total)
    return acc + p
  }, 0)

  const n = normal(a, b)
  const frente = cortes.map((t) => mezclar(a, b, t))
  const fondo = frente.map((p) => sumar(p, escalar(n, profundidad * (0.92 + azar() * 0.16))))

  return Array.from({ length: cantidad }, (_, i) => {
    const puntos = [frente[i], frente[i + 1], fondo[i + 1], fondo[i]]
    return { d: trazo(puntos, true), centro: centro(puntos), numero: primerNumero + i }
  })
}

function planoPortada(azar) {
  const ancho = 720
  const alto = 640
  const a = [-60, 540]
  const b = [780, 440]
  const borde = desplazar(a, b, 18)
  const interior = desplazar(a, b, 18 + 168 + 16)
  const bordeInterior = desplazar(a, b, 18 + 168 + 32)

  const filaA = franja(azar, mezclar(...borde, 0.1), mezclar(...borde, 0.9), 7, 150, 1)
  const filaB = franja(azar, mezclar(...bordeInterior, 0.16), mezclar(...bordeInterior, 0.86), 6, 140, 8)
  filaA[2].destacado = true

  return {
    ancho,
    alto,
    curvas: curvasDeNivel(azar, ancho, alto, 9),
    calles: [calle(a, b, 36), calle(...interior, 32)],
    lotes: [...filaA, ...filaB],
    limites: [],
    vecinos: [],
    retiros: [],
    norte: { x: 632, y: 92, r: 22 },
  }
}

function planoProyecto(azar, tipo, nombreCalle) {
  const ancho = 400
  const alto = 300
  const caida = (azar() * 2 - 1) * 28
  const a = [-20, 262 + caida / 2]
  const b = [420, 262 - caida / 2]
  const borde = desplazar(a, b, 13)
  const n = normal(...borde)
  const base = {
    ancho,
    alto,
    curvas: curvasDeNivel(azar, ancho, alto, 6),
    calles: [calle(a, b, 26, nombreCalle)],
    lotes: [],
    limites: [],
    vecinos: [],
    retiros: [],
    norte: { x: azar() > 0.5 ? 360 : 40, y: 40, r: 14, giro: azar() * 50 - 25 },
  }

  if (tipo === 'loteo') {
    base.lotes = franja(azar, mezclar(...borde, 0.06), mezclar(...borde, 0.84), 6, 170, 1)
    return base
  }

  // un terreno con frente a la calle y el fondo irregular
  const t0 = 0.1 + azar() * 0.15
  const t1 = 0.62 + azar() * 0.22
  const p0 = mezclar(...borde, t0)
  const p1 = mezclar(...borde, t1)
  const vertices = 2 + Math.floor(azar() * 3)
  const fondo = Array.from({ length: vertices }, (_, j) => {
    const t = 1 - j / (vertices - 1)
    const lateral = (azar() * 2 - 1) * 24
    return sumar(mezclar(p0, p1, t), sumar(escalar(n, 120 + azar() * 80), [lateral, 0]))
  })
  const parcela = [p0, p1, ...fondo]
  const c = centro(parcela)

  base.limites = [trazo(parcela, true)]
  base.retiros = [trazo(parcela.map((p) => mezclar(c, p, 0.8)), true)]
  // deslindes de los vecinos, para que el terreno no flote solo
  base.vecinos = [Math.max(0, t0 - 0.12 - azar() * 0.1), Math.min(1, t1 + 0.1 + azar() * 0.1)].map((t) => {
    const inicio = mezclar(...borde, t)
    return trazo([inicio, sumar(inicio, sumar(escalar(n, 300), [(azar() * 2 - 1) * 40, 0]))])
  })
  return base
}

export default function Plano({ semilla, tipo = 'parcela', calle: nombreCalle, variante = 'proyecto' }) {
  const plano = useMemo(() => {
    const azar = azarDesde(semilla)
    return variante === 'portada' ? planoPortada(azar) : planoProyecto(azar, tipo, nombreCalle)
  }, [semilla, tipo, nombreCalle, variante])

  const { ancho, alto, norte } = plano

  return (
    <svg
      className={`plano plano--${variante}`}
      viewBox={`0 0 ${ancho} ${alto}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className="plano__curvas">
        {plano.curvas.map((d, i) => <path key={i} d={d} />)}
      </g>

      {plano.calles.map((c, i) => (
        <g key={i} className="plano__calle">
          {c.bordes.map((d) => <path key={d} d={d} />)}
          <path className="plano__eje" d={c.eje} />
          {c.nombre && (
            <text
              x={c.etiqueta.x}
              y={c.etiqueta.y}
              transform={`rotate(${c.etiqueta.angulo} ${c.etiqueta.x} ${c.etiqueta.y})`}
              dy="0.35em"
            >
              {c.nombre}
            </text>
          )}
        </g>
      ))}

      {plano.lotes.map((l) => (
        <g key={l.numero} className={l.destacado ? 'plano__lote plano__lote--destacado' : 'plano__lote'}>
          <path d={l.d} />
          <text x={l.centro[0]} y={l.centro[1]} dy="0.35em">{l.numero}</text>
        </g>
      ))}

      {plano.vecinos.map((d) => <path key={d} className="plano__vecino" d={d} />)}
      {plano.limites.map((d) => <path key={d} className="plano__limite" d={d} />)}
      {plano.retiros.map((d) => <path key={d} className="plano__retiro" d={d} />)}

      <g className="plano__norte" transform={`translate(${norte.x} ${norte.y}) rotate(${norte.giro ?? 0})`}>
        <circle r={norte.r} />
        <path d={`M 0 ${norte.r * 0.6} L 0 ${-norte.r * 0.6} M ${-norte.r * 0.25} ${-norte.r * 0.25} L 0 ${-norte.r * 0.6} L ${norte.r * 0.25} ${-norte.r * 0.25}`} />
        <text y={-norte.r - 8}>N</text>
      </g>
    </svg>
  )
}
