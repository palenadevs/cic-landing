import { SERVICIOS } from '../data.js'
import Foto from './Foto.jsx'
import Icono from './Icono.jsx'
import TituloSeccion from './TituloSeccion.jsx'
import './Servicios.css'

export default function Servicios() {
  return (
    <section id="servicios" className="seccion">
      <div className="wrap">
        <TituloSeccion titulo="Nuestros servicios">
          <p>Tres áreas en las que acompañamos a quienes operan desde el extranjero</p>
        </TituloSeccion>

        <div className="servicios">
          {SERVICIOS.map(({ id, icono, titulo, texto, foto }) => (
            <article key={id} className="servicio">
              {foto && <Foto src={foto} className="servicio__foto" />}
              <Icono nombre={icono} />
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
