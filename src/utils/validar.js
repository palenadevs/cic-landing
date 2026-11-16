export const NOMBRE_MAXIMO = 60
export const CORREO_MAXIMO = 254

export const ERROR_NOMBRE = 'Escribe tu nombre solo con letras (sin números ni símbolos).'
export const ERROR_CORREO = 'Ingresa un correo válido, por ejemplo tu@correo.cl.'
export const ERROR_CELULAR = 'Ingresa un celular chileno válido, por ejemplo +56 9 1234 5678.'
export const ERROR_CONSENTIMIENTO = 'Marca la casilla para que podamos contactarte.'

const NOMBRE = /^[\p{L}\p{M}]+(?:[ '’-][\p{L}\p{M}]+)*$/u

export function limpiarNombre(valor) {
  return String(valor ?? '').replace(/\s+/g, ' ').trim()
}

export function nombreValido(valor) {
  const nombre = limpiarNombre(valor)
  if (nombre.length > NOMBRE_MAXIMO) return false
  if ((nombre.match(/\p{L}/gu) ?? []).length < 2) return false
  return NOMBRE.test(nombre)
}

export function correoValido(valor) {
  const correo = String(valor ?? '').trim()
  return correo.length <= CORREO_MAXIMO && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
}

// Devuelve el celular normalizado (+569XXXXXXXX) o null si no es chileno.
export function normalizarCelular(valor) {
  const digitos = String(valor ?? '').replace(/\D/g, '')
  if (/^9\d{8}$/.test(digitos)) return `+56${digitos}`
  if (/^569\d{8}$/.test(digitos)) return `+${digitos}`
  return null
}
