export default function TituloSeccion({ titulo, claro, children }) {
  return (
    <div className={claro ? 'titulo-seccion titulo-seccion--claro' : 'titulo-seccion'}>
      <h2>{titulo}</h2>
      {children && <div className="titulo-seccion__texto">{children}</div>}
    </div>
  )
}
