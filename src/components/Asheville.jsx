import { ASHEVILLE } from '../data.js'
import { publico } from '../utils/rutas.js'
import './Asheville.css'

export default function Asheville() {
  const { foto } = ASHEVILLE
  return (
    <section className="asheville" id="asheville">
      <div className="contenedor asheville__grilla">
        <img
          className="asheville__foto"
          src={publico(foto.src)}
          srcSet={`${publico(foto.src700)} 700w, ${publico(foto.src)} ${foto.ancho}w`}
          sizes="(min-width: 900px) 50vw, 100vw"
          alt="Vista del centro de Asheville con las montañas Blue Ridge de fondo"
          width={foto.ancho}
          height={foto.alto}
          loading="lazy"
        />
        <div>
          <h2>{ASHEVILLE.titulo}</h2>
          <p className="texto-suave">{ASHEVILLE.texto}</p>
        </div>
      </div>
    </section>
  )
}
