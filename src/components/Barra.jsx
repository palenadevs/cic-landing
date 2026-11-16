import { MENU } from '../data.js'
import Logo from './Logo.jsx'
import './Barra.css'

export default function Barra() {
  return (
    <header className="barra">
      <a href="#inicio" className="barra__logo" aria-label="Carolina International Capital, ir al inicio">
        <Logo />
      </a>
      <nav className="barra__menu" aria-label="Secciones">
        {MENU.map(([href, texto]) => (
          <a key={href} href={href}>
            {texto}
          </a>
        ))}
      </nav>
      <a className="boton boton--chico" href="#contacto">
        Agenda una asesoría
      </a>
    </header>
  )
}
