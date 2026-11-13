import { VENTAJAS } from '../data.js'
import Icono from './Icono.jsx'
import TituloSeccion from './TituloSeccion.jsx'
import './Nosotros.css'

export default function Nosotros() {
  return (
    <section id="nosotros" className="seccion seccion--gris">
      <div className="wrap nosotros">
        <TituloSeccion titulo={<>Basados en la experiencia<br />Enfocados en resultados</>}>
          <p>
            Nuestra firma ayuda a personas extranjeras, emprendedores, inversionistas y empresas
            internacionales a establecer y operar negocios en Estados Unidos con confianza.
          </p>
          <p>
            Desde la constitución de empresas hasta el contacto con profesionales y la
            recomendación de inversiones, te acompañamos con apoyo práctico en cada etapa.
          </p>
          <p>
            Entendemos los desafíos particulares que enfrentan las personas y empresas extranjeras
            al ingresar al mercado estadounidense.
          </p>
        </TituloSeccion>

        <ul className="ventajas">
          {VENTAJAS.map(({ icono, texto }) => (
            <li key={texto}>
              <Icono nombre={icono} />
              {texto}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
