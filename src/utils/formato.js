function miles(entero) {
  return String(entero).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

// Formato chileno: punto para miles, coma para decimales.
export function numero(valor, decimales = 0) {
  const [entero, decimal] = Math.abs(valor).toFixed(decimales).split('.')
  return (valor < 0 ? '-' : '') + miles(entero) + (decimal ? `,${decimal}` : '')
}

export const dolares = (valor) => `US$ ${numero(valor)}`

export const metros = (valor) => `${numero(valor, Number.isInteger(valor) ? 0 : 1)} m²`

export function acres(valor) {
  return `${numero(valor, 2).replace(/,?0+$/, '')} ${valor === 1 ? 'acre' : 'acres'}`
}
