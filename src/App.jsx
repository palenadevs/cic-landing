import { useState } from 'react'
import Barra from './components/Barra.jsx'
import Hero from './components/Hero.jsx'
import Comprar from './components/Comprar.jsx'
import Terrenos from './components/Terrenos.jsx'
import Golf from './components/Golf.jsx'
import Asheville from './components/Asheville.jsx'
import Zona from './components/Zona.jsx'
import Asesoria from './components/Asesoria.jsx'
import Contacto from './components/Contacto.jsx'
import Pie from './components/Pie.jsx'

export default function App() {
  // Terreno elegido desde una tarjeta; se refleja en el select del formulario.
  const [terreno, setTerreno] = useState('')

  function consultar(id) {
    setTerreno(id)
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="pagina">
      <Barra />
      <main id="inicio">
        <Hero />
        <Comprar />
        <Terrenos alConsultar={consultar} />
        <Golf />
        <Asheville />
        <Zona />
        <Asesoria />
        <Contacto terreno={terreno} alCambiarTerreno={setTerreno} />
      </main>
      <Pie />
    </div>
  )
}
