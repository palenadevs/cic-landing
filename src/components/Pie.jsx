import logoBlanco from '../assets/logo-blanco.png'
import { CORREO, NAV } from '../data.js'
import './Pie.css'

export default function Pie() {
  return (
    <footer className="pie">
      <div className="wrap pie__grid">
        <a href="#inicio" className="pie__logo">
          <img className="logo" src={logoBlanco} alt="Carolina International Capital" width="200" height="56" />
        </a>

        <div>
          <h2>Enlaces rápidos</h2>
          <ul>
            {NAV.map(({ etiqueta, href }) => (
              <li key={href}><a href={href}>{etiqueta}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contacto</h2>
          <ul>
            <li className="pie__correo"><a href={`mailto:${CORREO}`}>{CORREO}</a></li>
          </ul>
        </div>
      </div>

      <div className="wrap">
        <p className="pie__base">© 2026 Carolina International Capital. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
