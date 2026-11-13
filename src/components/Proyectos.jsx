import { PROYECTOS } from '../data.js'
import Foto from './Foto.jsx'
import Plano from './Plano.jsx'
import TituloSeccion from './TituloSeccion.jsx'
import './Proyectos.css'

export default function Proyectos() {
  return (
    <section id="proyectos" className="seccion seccion--gris">
      <div className="wrap">
        <TituloSeccion titulo="Proyectos recientes" />

        <div className="proyectos">
          {PROYECTOS.map(({ id, nombre, calle, tipo, plano, foto }) => (
            <article key={id} className="proyecto">
              <Foto src={foto} alt={nombre} className="proyecto__visual">
                <Plano semilla={id} tipo={plano} calle={calle} />
              </Foto>
              <h3>{nombre}</h3>
              {tipo && <p>{tipo}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
