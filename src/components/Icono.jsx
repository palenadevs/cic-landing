const TRAZOS = {
  precio: (
    <path d="M12 3v18M16.5 7.5C16 6 14.3 5 12 5c-2.8 0-4.5 1.4-4.5 3.3 0 4.4 9 2.6 9 7.2 0 2-1.8 3.5-4.5 3.5-2.4 0-4.2-1.1-4.7-2.7" />
  ),
  superficie: (
    <>
      <rect x="2.5" y="7" width="19" height="10" rx="1.5" />
      <path d="M6.5 7v4M10.5 7v3M14.5 7v4M18 7v3" />
    </>
  ),
  plusvalia: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  tiempo: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 13.5V9.5M9.5 2.5h5M18.5 6.5l1.5-1.5" />
    </>
  ),
  garantia: (
    <>
      <path d="M12 2.5l8 3v6c0 5-3.5 8.6-8 10-4.5-1.4-8-5-8-10v-6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  ruta: <path d="M8 21c0-5 8-5 8-10S8 7 8 3M4 21c0-7 8-7 8-12M20 3c0 6-8 6-8 12" />,
  sendero: (
    <>
      <path d="M3 20l6-11 4 6 2-3 6 8z" />
      <circle cx="17" cy="5" r="2" />
    </>
  ),
  cascada: <path d="M4 4h16M7 4v9M12 4v12M17 4v9M4 19c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 4 0" />,
  golf: (
    <>
      <path d="M8 21V3l9 4-9 4" />
      <path d="M4 21c1.5-1.6 7-2.2 12-1" />
      <circle cx="18.5" cy="19" r="1.5" />
    </>
  ),
  ciudad: <path d="M3 21h18M5 21V10h5v11M10 21V5h6v16M16 21v-8h3v8M7 13h1M7 16h1M12.5 8h1M12.5 11h1M12.5 14h1" />,
  casona: <path d="M2.5 21h19M4 21V11l8-6 8 6v10M9 21v-5h6v5M12 5V2.5M7.5 13h1.5M15 13h1.5" />,
  parque: <path d="M7 3l-4.5 8h3L2 17h10l-3.5-6h3zM7 17v4M17 7l-3.5 6h2L13 18h8l-2.5-5h2zM17 18v3" />,
  rio: (
    <path d="M2 8c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0M2 13c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0M2 18c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0" />
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  flecha: <path d="M5 12h14M13 6l6 6-6 6" />,
}

export default function Icono({ nombre, className = 'icono' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {TRAZOS[nombre]}
    </svg>
  )
}
