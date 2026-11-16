import { GOLF, PENDIENTES } from '../data.js'
import Icono from './Icono.jsx'
import Marcador from './Marcador.jsx'
import './Golf.css'

export default function Golf() {
  return (
    <section className="golf">
      <div className="contenedor golf__grilla">
        <span className="golf__icono">
          <Icono nombre="golf" />
        </span>
        <div>
          <p className="sobretitulo sobretitulo--verde">A 2 millas</p>
          <h2>{GOLF.titulo}</h2>
          <p>{GOLF.texto}</p>
          <p className="golf__nota">
            <Marcador valor={PENDIENTES.clubGolf} texto="nombre del club por confirmar" />{' '}
            <Marcador valor={PENDIENTES.clubGolfTerrenos} texto="terrenos a los que aplica por confirmar" />
          </p>
        </div>
      </div>
    </section>
  )
}
