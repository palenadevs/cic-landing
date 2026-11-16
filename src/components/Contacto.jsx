import { PENDIENTES } from '../data.js'
import Formulario from './Formulario.jsx'
import Marcador from './Marcador.jsx'
import './Contacto.css'

export default function Contacto({ terreno, alCambiarTerreno }) {
  return (
    <section className="contacto" id="contacto">
      <div className="contenedor contacto__grilla">
        <div>
          <h2>Agenda una asesoría</h2>
          <p className="texto-suave">
            Déjanos tus datos y te contactamos para resolver tus dudas sobre los terrenos y el
            proceso de compra desde Chile.
          </p>
          <div className="contacto__otros">
            <Marcador valor={PENDIENTES.whatsapp} texto="WhatsApp por confirmar" />
            <Marcador valor={PENDIENTES.correo} texto="correo por confirmar" />
          </div>
        </div>
        <Formulario terreno={terreno} alCambiarTerreno={alCambiarTerreno} />
      </div>
    </section>
  )
}
