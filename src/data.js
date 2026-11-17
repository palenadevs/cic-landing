// Contenido de la landing. Los datos en `null` dentro de PENDIENTES todavía no
// están confirmados por el cliente: mientras tanto se muestra un marcador.

export const PENDIENTES = {
  superficieMinima: null,
  clubGolf: null,
  clubGolfTerrenos: null,
  whatsapp: null,
  correo: null,
  textoLegal: null,
}

export const HERO = {
  titulo: 'Invertir en Asheville, NC',
  bajada:
    'Una de las regiones con mayor crecimiento y calidad de vida de EE. UU. Asesoría 100% integral para chilenos.',
  precioDesde: 45000,
}

export const PILARES = [
  'Experiencia con clientes internacionales',
  'Red de profesionales de confianza',
  'Asesoría personalizada',
  'Proceso eficiente y transparente',
]

export const COMPRAR = {
  titulo: 'Comprar en EE. UU. desde Chile',
  puntos: [
    { icono: 'precio', pregunta: '¿Precios?', respuesta: 'Lotes disponibles desde US$ 45.000' },
    // Respuestas en null: pendientes de definir con el cliente.
    { icono: 'plusvalia', pregunta: '¿Plusvalía?', respuesta: null },
    { icono: 'tiempo', pregunta: '¿Tiempo?', respuesta: null },
    { icono: 'garantia', pregunta: '¿Garantía?', respuesta: null },
  ],
}

export const TERRENOS = [
  { id: 'gaddis-branch', direccion: 'Gaddis Branch Rd', subdivision: 'Sweetwater Farm', acres: 1.03, m2: 4184.5, precio: 74000 },
  { id: 'plato-74', direccion: '74 Plato', subdivision: 'Springfield Meadow Dr', acres: 0.14, m2: 566.6, precio: 66000 },
  { id: 'amberjack-1', direccion: 'Amberjack Dr 1', subdivision: null, acres: 0.66, m2: 2670.9, precio: 45000 },
  { id: 'whippoorwill-6', direccion: '9999 Whippoorwill Way 6', subdivision: 'Temple', acres: 0.24, m2: 953.8, precio: 80000 },
  { id: 'bluemist-meadow', direccion: 'Bluemist Way - Bluemist Meadow', subdivision: 'Avery Park', acres: 0.85, m2: 3439.8, precio: 72000 },
  { id: 'view-ridge-85', direccion: '85 View Ridge Parkway', subdivision: 'Blue Mist Farms', acres: 0.75, m2: 3035.1, precio: 75000 },
  { id: 'chiloe-1', direccion: 'Chiloe Meadows - 1', subdivision: null, acres: 2.11, m2: 8538.9, precio: 140000 },
  { id: 'chiloe-2', direccion: 'Chiloe Meadows - 2', subdivision: null, acres: 1.63, m2: 6596.4, precio: 128000 },
  { id: 'chiloe-3', direccion: 'Chiloe Meadows - 3', subdivision: null, acres: 3.28, m2: 13273.7, precio: 147000, vendido: true },
  { id: 'chiloe-4', direccion: 'Chiloe Meadows - 4', subdivision: null, acres: 1.89, m2: 7648.6, precio: 147000 },
  { id: 'chiloe-5', direccion: 'Chiloe Meadows - 5', subdivision: null, acres: 2.39, m2: 9672, precio: 140000 },
  { id: 'chiloe-6', direccion: 'Chiloe Meadows - 6', subdivision: null, acres: 2.5, m2: 10117.2, precio: 152000 },
  { id: 'flowing-brook-7', direccion: '9999 Flowing Brook Lane 7', subdivision: 'Waynesville', acres: 0.72, m2: 2913.7, precio: 75000 },
  { id: 'flowing-brook-5', direccion: '9999 Flowing Brook Lane 5', subdivision: 'Waynesville', acres: 0.44, m2: 1780.6, precio: 75000 },
  { id: 'audria-drive', direccion: 'Audria Drive', subdivision: 'Candler', acres: 1.22, m2: 4937.2, precio: 68000 },
]

export const TERRENOS_DISPONIBLES = TERRENOS.filter((t) => !t.vendido)

// Disponibles ordenados por precio y superficie; los vendidos al final.
export const TERRENOS_ORDENADOS = [
  ...[...TERRENOS_DISPONIBLES].sort((a, b) => a.precio - b.precio || a.m2 - b.m2),
  ...TERRENOS.filter((t) => t.vendido),
]

export const GOLF = {
  titulo: 'Un club de golf a 2 millas',
  texto:
    'A solo 2 millas (unos 3,2 km) hay un club de golf: un atractivo más para disfrutar tu inversión en las montañas de Carolina del Norte.',
}

export const ASHEVILLE = {
  titulo: 'Viaja, invierte, vive en Asheville',
  texto:
    'Ubicada en Carolina del Norte, Asheville es la ciudad más grande del oeste. Constantemente genera reconocimiento nacional gracias al estilo de vida y la economía favorable.',
  foto: { src: 'images/asheville-1342.webp', src700: 'images/asheville-700.webp', ancho: 1342, alto: 733 },
}

export const ACTIVIDADES = [
  { icono: 'ruta', titulo: 'Blue Ridge Parkway', texto: 'La ruta escénica que recorre las cumbres de los Apalaches, con miradores y paradas para caminar.' },
  { icono: 'sendero', titulo: 'Senderismo', texto: 'Senderos para todos los niveles en el Bosque Nacional Pisgah y en las montañas que rodean la ciudad.' },
  { icono: 'cascada', titulo: 'Cascadas', texto: 'La región es conocida por sus cascadas, como Looking Glass Falls, en el Bosque Nacional Pisgah.' },
  { icono: 'golf', titulo: 'Golf', texto: 'Canchas de golf entre cerros y bosques, con vista a las montañas.' },
  { icono: 'ciudad', titulo: 'Centro de Asheville', texto: 'Galerías de arte, música en vivo, restaurantes y cervecerías artesanales en un centro para recorrer a pie.' },
  { icono: 'casona', titulo: 'Biltmore', texto: 'La histórica mansión Biltmore, con sus jardines, su viña y sus senderos.' },
  { icono: 'parque', titulo: 'Great Smoky Mountains', texto: 'El parque nacional de las Great Smoky Mountains, con bosques, fauna y vistas de montaña.' },
  { icono: 'rio', titulo: 'Ríos', texto: 'Kayak, rafting y paseos en el río French Broad, que cruza Asheville.' },
]

export const SERVICIOS = [
  {
    titulo: 'Formación de empresa en EE. UU.',
    texto:
      'Te ayudamos a constituir la entidad en EE. UU. que calce con tus objetivos y tu estructura, ya sea para comprar una propiedad o para crear un vehículo de inversión.',
  },
  {
    titulo: 'Contadores y asesores tributarios',
    texto:
      'Entender los requisitos tributarios de EE. UU. es clave para inversionistas extranjeros. Te conectamos con contadores y asesores tributarios con experiencia en estos casos.',
  },
  {
    titulo: 'Apoyo en la compraventa',
    texto:
      'Ya sea una propiedad para vacacionar, para arrendar o un activo comercial, te acompañamos para simplificar el proceso de principio a fin.',
  },
]

export const MENU = [
  ['#asheville', 'Asheville'],
  ['#zona', 'La zona'],
  ['#terrenos', 'Terrenos'],
  ['#asesoria', 'Asesoría'],
]
