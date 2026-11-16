// TODO: conectar a un destino real. Por ahora simula el envío.
export async function enviarContacto(datos, { simularError = false, espera = 500 } = {}) {
  await new Promise((listo) => setTimeout(listo, espera))
  return { ok: !simularError, simulado: true }
}
