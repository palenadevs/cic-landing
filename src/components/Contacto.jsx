import { useState } from 'react'
import { CORREO, IMAGENES } from '../data.js'
import Foto from './Foto.jsx'
import TituloSeccion from './TituloSeccion.jsx'
import './Contacto.css'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)

  // TODO: el formulario todavía no envía a ningún lado, falta definir el destino
  const enviar = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="contacto" className="contacto">
      {IMAGENES.contacto && <Foto src={IMAGENES.contacto} className="contacto__foto" />}

      <div className="wrap contacto__grid">
        <div>
          <TituloSeccion claro titulo="Comienza tu camino empresarial en EE. UU.">
            <p>
              Ya sea que quieras constituir una empresa, invertir en bienes raíces, expandir tu
              negocio a Estados Unidos o construir una estrategia de inversión de largo plazo,
              estamos aquí para ayudarte.
            </p>
            <p>
              Contáctanos hoy para conversar sobre tus objetivos y conocer cómo podemos apoyar tus
              necesidades de negocio e inversión en Estados Unidos.
            </p>
          </TituloSeccion>
          <p className="contacto__correo">
            O escríbenos a <a href={`mailto:${CORREO}`}>{CORREO}</a>
          </p>
        </div>

        <form className="formulario" onSubmit={enviar}>
          <label className="campo">
            Nombre
            <input name="nombre" autoComplete="name" required />
          </label>
          <label className="campo">
            Email
            <input type="email" name="email" autoComplete="email" spellCheck={false} required />
          </label>
          <label className="campo campo--ancho">
            Teléfono
            <input type="tel" name="telefono" autoComplete="tel" />
          </label>
          <label className="campo campo--ancho">
            Mensaje
            <textarea name="mensaje" rows={5} />
          </label>
          <div className="formulario__acciones">
            <button className="btn btn-gold" type="submit" disabled={enviado}>
              {enviado ? 'Mensaje enviado' : 'Enviar mensaje'}
            </button>
            <p className="formulario__estado" aria-live="polite">
              {enviado && 'Te responderemos a la brevedad'}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
