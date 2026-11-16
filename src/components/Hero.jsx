import { HERO, PENDIENTES } from '../data.js'
import { dolares } from '../utils/formato.js'
import { publico } from '../utils/rutas.js'
import Icono from './Icono.jsx'
import Marcador from './Marcador.jsx'
import './Hero.css'

// Versiones de la foto del banner, escalada con IA desde el original de 860 px.
const ANCHOS_FOTO = [480, 860, 1290, 1720]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__texto">
        <p className="sobretitulo">Terrenos en Carolina del Norte, EE. UU.</p>
        <h1>{HERO.titulo}</h1>
        <p className="hero__bajada">{HERO.bajada}</p>

        <ul className="hero__datos">
          <li>
            <span className="circulo circulo--beige">
              <Icono nombre="precio" />
            </span>
            <span>
              <span className="hero__dato-etiqueta">Precios desde</span>
              <strong className="hero__dato-valor">{dolares(HERO.precioDesde)}</strong>
            </span>
          </li>
          <li>
            <span className="circulo circulo--beige">
              <Icono nombre="superficie" />
            </span>
            <span>
              <span className="hero__dato-etiqueta">Superficies desde</span>
              <strong className="hero__dato-valor hero__dato-valor--chico">
                <Marcador valor={PENDIENTES.superficieMinima} texto="por confirmar" />
              </strong>
            </span>
          </li>
        </ul>

        <div className="hero__acciones">
          <a className="boton" href="#terrenos">
            Ver terrenos <Icono nombre="flecha" className="icono icono--boton" />
          </a>
          <a className="boton boton--borde" href="#contacto">
            Agenda una asesoría
          </a>
        </div>
      </div>

      <div className="hero__foto">
        <img
          src={publico('images/montanas-860.webp')}
          srcSet={ANCHOS_FOTO.map((w) => `${publico(`images/montanas-${w}.webp`)} ${w}w`).join(', ')}
          sizes="(min-width: 960px) 47vw, 100vw"
          alt="Camino entre bosques de otoño en las montañas Blue Ridge"
          width="860"
          height="1900"
          fetchPriority="high"
        />
        <span className="hero__lugar">
          <Icono nombre="pin" className="icono icono--chico" /> Asheville NC, USA
        </span>
      </div>
    </section>
  )
}
