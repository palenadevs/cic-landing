import { useState } from 'react'
import logoColor from '../assets/logo-color.png'
import { NAV } from '../data.js'
import Icono from './Icono.jsx'
import './Cabecera.css'

export default function Cabecera() {
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <header className="cabecera">
      <div className="wrap cabecera__barra">
        <a href="#inicio" onClick={cerrar}>
          <img className="logo" src={logoColor} alt="Carolina International Capital" width="180" height="51" />
        </a>

        <nav className="cabecera__nav" aria-label="Principal">
          {NAV.map(({ etiqueta, href }) => (
            <a key={href} href={href}>{etiqueta}</a>
          ))}
        </nav>

        <div className="cabecera__acciones">
          <a className="btn btn-navy cabecera__cta" href="#contacto">Escríbenos</a>
          <button
            type="button"
            className="cabecera__menu"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setAbierto(!abierto)}
          >
            <Icono nombre={abierto ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {abierto && (
        <nav id="menu-movil" className="menu-movil" aria-label="Principal">
          <div className="wrap">
            {NAV.map(({ etiqueta, href }) => (
              <a key={href} href={href} onClick={cerrar}>{etiqueta}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
