import { TERRENOS_DISPONIBLES, TERRENOS_ORDENADOS } from '../data.js'
import { acres, dolares, metros } from '../utils/formato.js'
import './Terrenos.css'

export default function Terrenos({ alConsultar }) {
  return (
    <section className="terrenos" id="terrenos">
      <div className="contenedor">
        <h2>Terrenos disponibles</h2>
        <p className="terrenos__intro">
          {TERRENOS_DISPONIBLES.length} terrenos en el oeste de Carolina del Norte. Precios en dólares.
        </p>

        <ul className="tarjetas">
          {TERRENOS_ORDENADOS.map((t) => (
            <li key={t.id} className={`tarjeta${t.vendido ? ' tarjeta--vendida' : ''}`}>
              <div className="tarjeta__cabeza">
                <p className="tarjeta__sub">{t.subdivision ?? ' '}</p>
                <h3>{t.direccion}</h3>
                {t.vendido && <span className="sello">Vendido</span>}
              </div>

              <dl className="tarjeta__datos">
                <div>
                  <dt>Superficie</dt>
                  <dd>{metros(t.m2)}</dd>
                </div>
                <div>
                  <dt>Acres</dt>
                  <dd>{acres(t.acres)}</dd>
                </div>
              </dl>

              <p className="tarjeta__precio">{dolares(t.precio)}</p>

              {!t.vendido && (
                <button type="button" className="tarjeta__boton" onClick={() => alConsultar(t.id)}>
                  Consultar por este terreno
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
