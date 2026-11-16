import { SERVICIOS } from '../data.js'
import './Asesoria.css'

export default function Asesoria() {
  return (
    <section className="asesoria" id="asesoria">
      <div className="contenedor">
        <h2>Asesoría 100% integral para chilenos</h2>
        <p className="asesoria__intro">
          Te ayudamos a invertir en EE. UU. con confianza: desde la empresa hasta la compra del
          terreno.
        </p>
        <ol className="servicios">
          {SERVICIOS.map((s, i) => (
            <li key={s.titulo} className="servicio">
              <span className="servicio__numero">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
