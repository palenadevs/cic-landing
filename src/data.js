// Fotos: mientras estén en null se muestra el plano dibujado (portada y
// proyectos) o la sección se arma sin foto (servicios y contacto). Para poner
// una, guardar el archivo en src/assets, importarlo aquí y reemplazar el null.

export const NAV = [
  { etiqueta: 'Inicio', href: '#inicio' },
  { etiqueta: 'Nosotros', href: '#nosotros' },
  { etiqueta: 'Servicios', href: '#servicios' },
  { etiqueta: 'Proyectos', href: '#proyectos' },
  { etiqueta: 'Contacto', href: '#contacto' },
]

export const VENTAJAS = [
  { icono: 'public', texto: 'Experiencia con enfoque internacional' },
  { icono: 'handshake', texto: 'Red de profesionales de confianza' },
  { icono: 'person', texto: 'Asesoría personalizada' },
  { icono: 'verified_user', texto: 'Proceso eficiente y transparente' },
]

export const SERVICIOS = [
  {
    id: 'constitucion',
    icono: 'account_balance',
    titulo: 'Constitución de empresas en EE. UU.',
    texto:
      'Ayudamos a clientes internacionales a constituir entidades comerciales en Estados Unidos adaptadas a sus objetivos y estructura. Ya sea que compres una propiedad o crees un vehículo de inversión, hacemos que el proceso sea simple y eficiente.',
    foto: null,
  },
  {
    id: 'tributario',
    icono: 'receipt_long',
    titulo: 'Derivación a profesionales contables y tributarios',
    texto:
      'Comprender los requisitos tributarios de EE. UU. es clave para empresas e inversionistas extranjeros. Te conectamos con contadores y asesores tributarios con experiencia en Estados Unidos que entienden estas exigencias.',
    foto: null,
  },
  {
    id: 'inmobiliario',
    icono: 'home_work',
    titulo: 'Apoyo en transacciones inmobiliarias',
    texto:
      'El mercado inmobiliario de EE. UU. ofrece grandes oportunidades para compradores e inversionistas internacionales. Ya sea una propiedad vacacional, una inversión para arriendo o un activo comercial, simplificamos el proceso de principio a fin.',
    foto: null,
  },
]

// tipo queda en null mientras el cliente no diga qué operación fue.
// plano: 'loteo' dibuja lotes, 'parcela' un solo terreno.
export const PROYECTOS = [
  { id: 'pace-1', nombre: 'Pace Rd Project 1', calle: 'PACE RD', tipo: 'Subdivisión', plano: 'loteo', foto: null },
  { id: 'pace-2', nombre: 'Pace Rd Project 2', calle: 'PACE RD', tipo: 'Venta para desarrollo', plano: 'parcela', foto: null },
  { id: 'amber-1', nombre: 'Amber Rd Project 1', calle: 'AMBER RD', tipo: null, plano: 'parcela', foto: null },
  { id: 'cruso-2', nombre: 'Cruso Project 2', calle: 'CRUSO', tipo: null, plano: 'parcela', foto: null },
  { id: 'cooper-1', nombre: 'Cooper Dr Project 1', calle: 'COOPER DR', tipo: null, plano: 'parcela', foto: null },
]

export const IMAGENES = {
  portada: null,
  contacto: null,
}

export const CORREO = 'sales@carolinainternationalcapital.com'
