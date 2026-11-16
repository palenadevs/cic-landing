import { publico } from '../utils/rutas.js'

export default function Logo({ blanco = false, className }) {
  return (
    <img
      className={className}
      src={publico(blanco ? 'images/logo-blanco.png' : 'images/logo-color.png')}
      alt="Carolina International Capital"
      width="584"
      height="164"
    />
  )
}
