// Prefija la base de Vite ("/" en dev, "/cic-landing/" en GitHub Pages)
// a una ruta de la carpeta public.
export function publico(ruta) {
  return `${import.meta.env.BASE_URL}${ruta.replace(/^\//, '')}`
}
