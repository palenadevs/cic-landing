import { ACTIVIDADES } from '../data.js'
import Icono from './Icono.jsx'
import './Zona.css'

export default function Zona() {
  return (
    <section className="zona" id="zona">
      <div className="contenedor">
        <h2>Qué hacer en la zona</h2>
        <p className="texto-suave zona__intro">
          Montañas, ríos y una ciudad con vida propia: lo que hace atractiva a la región para vivir,
          viajar o invertir.
        </p>
        <ul className="actividades">
          {ACTIVIDADES.map((a) => (
            <li key={a.titulo} className="actividad">
              <span className="circulo circulo--azul">
                <Icono nombre={a.icono} />
              </span>
              <h3>{a.titulo}</h3>
              <p>{a.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
