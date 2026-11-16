import { PENDIENTES } from '../data.js'
import Logo from './Logo.jsx'
import Marcador from './Marcador.jsx'
import './Pie.css'

export default function Pie() {
  return (
    <footer className="pie">
      <div className="contenedor">
        <Logo blanco className="pie__logo" />
        <p>Terrenos en Asheville, Carolina del Norte, EE. UU.</p>
        <p className="pie__legal">
          <Marcador valor={PENDIENTES.textoLegal} texto="textos legales por confirmar" />
        </p>
        <p className="pie__copy">© 2026 Carolina International Capital.</p>
      </div>
    </footer>
  )
}
