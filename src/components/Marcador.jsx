// Muestra el valor si existe; si no, un marcador con el dato que falta confirmar.
export default function Marcador({ valor, texto }) {
  if (valor) return <span>{valor}</span>
  return <span className="marcador">[{texto}]</span>
}
