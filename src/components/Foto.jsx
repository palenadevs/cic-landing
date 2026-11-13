// Si el cliente todavía no manda la foto, se muestra lo que venga como hijo
export default function Foto({ src, alt = '', className = '', children }) {
  return (
    <div className={`foto ${className}`}>
      {src ? <img src={src} alt={alt} loading="lazy" /> : children}
    </div>
  )
}
