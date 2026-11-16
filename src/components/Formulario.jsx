import { useState } from 'react'
import { PENDIENTES, TERRENOS_DISPONIBLES } from '../data.js'
import { enviarContacto } from '../utils/enviar.js'
import { dolares } from '../utils/formato.js'
import {
  CORREO_MAXIMO,
  ERROR_CELULAR,
  ERROR_CONSENTIMIENTO,
  ERROR_CORREO,
  ERROR_NOMBRE,
  NOMBRE_MAXIMO,
  correoValido,
  limpiarNombre,
  nombreValido,
  normalizarCelular,
} from '../utils/validar.js'
import Marcador from './Marcador.jsx'

const UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

export default function Formulario({ terreno, alCambiarTerreno }) {
  // 'editando' | 'enviando' | 'enviado'
  const [estado, setEstado] = useState('editando')
  const [error, setError] = useState(null)

  function marcarError(form, campo, mensaje) {
    setError({ campo, mensaje })
    form.elements[campo]?.focus()
  }

  async function enviar(evento) {
    evento.preventDefault()
    if (estado === 'enviando') return

    const form = evento.currentTarget
    const datos = Object.fromEntries(new FormData(form))
    const nombre = limpiarNombre(datos.nombre)

    if (!nombreValido(nombre)) return marcarError(form, 'nombre', ERROR_NOMBRE)
    if (!correoValido(datos.correo)) return marcarError(form, 'correo', ERROR_CORREO)
    if (!normalizarCelular(datos.celular)) return marcarError(form, 'celular', ERROR_CELULAR)
    if (datos.consentimiento !== 'on') {
      return marcarError(form, 'consentimiento', ERROR_CONSENTIMIENTO)
    }

    const parametros = new URLSearchParams(window.location.search)
    const utm = Object.fromEntries(
      UTM.filter((clave) => parametros.get(clave)).map((clave) => [clave, parametros.get(clave)]),
    )

    setError(null)
    setEstado('enviando')

    const { ok } = await enviarContacto(
      {
        nombre,
        correo: datos.correo.trim(),
        celular: normalizarCelular(datos.celular),
        terreno: datos.terreno || null,
        mensaje: String(datos.mensaje ?? '').trim() || null,
        trampa: datos.sitio_web,
        ...utm,
      },
      { simularError: parametros.get('simular') === 'error' },
    )

    if (!ok) {
      setEstado('editando')
      setError({ mensaje: 'No pudimos enviar tus datos. Revisa tu conexión e inténtalo de nuevo.' })
      return
    }
    setEstado('enviado')
  }

  if (estado === 'enviado') {
    return (
      <div className="formulario formulario--listo" role="status" tabIndex={-1}>
        <p className="formulario__gracias">Recibimos tus datos</p>
        <p>Te contactaremos para contarte más sobre los terrenos en Asheville.</p>
        <p className="aviso-previa">
          Vista previa: este envío fue una prueba. Tus datos no se guardaron ni se mandaron.
        </p>
      </div>
    )
  }

  const invalido = (campo) => (error?.campo === campo ? true : undefined)
  const describe = (campo) => (error?.campo === campo ? 'form-error' : undefined)

  return (
    <form
      className="formulario"
      onSubmit={enviar}
      noValidate
      aria-busy={estado === 'enviando'}
      onInput={(e) => {
        if (error?.campo === e.target.name) setError(null)
      }}
    >
      <label className="campo">
        <span>Nombre y apellido</span>
        <input
          name="nombre"
          autoComplete="name"
          maxLength={NOMBRE_MAXIMO}
          required
          aria-invalid={invalido('nombre')}
          aria-describedby={describe('nombre')}
        />
      </label>

      <label className="campo">
        <span>Correo</span>
        <input
          name="correo"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={CORREO_MAXIMO}
          required
          aria-invalid={invalido('correo')}
          aria-describedby={describe('correo')}
        />
      </label>

      <label className="campo">
        <span>Celular</span>
        <input
          name="celular"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+56 9 1234 5678"
          maxLength="20"
          required
          aria-invalid={invalido('celular')}
          aria-describedby={describe('celular')}
        />
      </label>

      <label className="campo">
        <span>Terreno de interés (opcional)</span>
        <select name="terreno" value={terreno} onChange={(e) => alCambiarTerreno(e.target.value)}>
          <option value="">Todavía no lo sé</option>
          {TERRENOS_DISPONIBLES.map((t) => (
            <option key={t.id} value={t.id}>
              {t.direccion} · {dolares(t.precio)}
            </option>
          ))}
        </select>
      </label>

      <label className="campo">
        <span>Mensaje (opcional)</span>
        <textarea name="mensaje" rows="3" maxLength="1000" />
      </label>

      {/* Campo trampa para bots: debe quedar vacío */}
      <div className="trampa" aria-hidden="true">
        <label>
          Deja este campo vacío
          <input name="sitio_web" tabIndex="-1" autoComplete="off" />
        </label>
      </div>

      <label className="consentimiento">
        <input
          name="consentimiento"
          type="checkbox"
          required
          aria-invalid={invalido('consentimiento')}
          aria-describedby={describe('consentimiento')}
        />
        <span>Acepto que Carolina International Capital me contacte y el tratamiento de mis datos.</span>
      </label>

      <Marcador
        valor={PENDIENTES.textoLegal}
        texto="texto legal y responsable de los datos por confirmar"
      />

      {error && (
        <p id="form-error" className="formulario__error" role="alert">
          {error.mensaje}
        </p>
      )}

      <button className="boton boton--enviar" type="submit" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando…' : 'Quiero asesoría'}
      </button>

      <p className="aviso-previa">Vista previa: este formulario todavía no envía datos.</p>
    </form>
  )
}
