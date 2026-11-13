import { IMAGENES } from '../data.js'
import Foto from './Foto.jsx'
import Plano from './Plano.jsx'
import './Portada.css'

export default function Portada() {
  return (
    <section id="inicio" className={IMAGENES.portada ? 'portada portada--foto' : 'portada'}>
      <Foto src={IMAGENES.portada} className="portada__visual">
        <Plano variante="portada" semilla="cic" />
      </Foto>

      <div className="wrap portada__contenido">
        <h1>Emprende, invierte y crece en Estados Unidos</h1>
        <p className="portada__bajada">
          Acompañamos a clientes internacionales en lo legal, financiero y operativo: desde
          constituir la empresa hasta comprar una propiedad, sin que tengas que resolverlo solo
          desde el extranjero.
        </p>
        <div className="portada__acciones">
          <a className="btn btn-gold" href="#contacto">Contáctanos</a>
          <a className="portada__enlace" href="#servicios">Ver servicios</a>
        </div>
      </div>
    </section>
  )
}
