import { COMPRAR, PILARES } from '../data.js'
import Icono from './Icono.jsx'
import Marcador from './Marcador.jsx'
import './Comprar.css'

export default function Comprar() {
  return (
    <section className="comprar">
      <div className="contenedor comprar__grilla">
        <div>
          <h2>{COMPRAR.titulo}</h2>
          <p className="texto-suave">
            Te acompañamos desde Chile en todo el proceso de compra de tu terreno en Asheville.
          </p>
          <ul className="pilares">
            {PILARES.map((pilar) => (
              <li key={pilar}>
                <Icono nombre="check" className="icono icono--verde" />
                {pilar}
              </li>
            ))}
          </ul>
        </div>

        <ul className="respuestas">
          {COMPRAR.puntos.map((punto) => (
            <li key={punto.pregunta} className="respuesta">
              <span className="circulo circulo--verde">
                <Icono nombre={punto.icono} />
              </span>
              <div>
                <h3>{punto.pregunta}</h3>
                <p>
                  <Marcador valor={punto.respuesta} texto="por definir" />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
