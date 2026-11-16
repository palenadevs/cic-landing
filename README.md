# Carolina International Capital

Landing "Invertir en Asheville, NC" de Carolina International Capital, construida con Vite y React.

## Comandos

Instalar dependencias:

    npm install

Levantar el entorno de desarrollo:

    npm run dev

Generar el build de producción:

    npm run build

## Estructura

- `src/data.js`: todo el contenido (hero, terrenos, actividades, servicios). Los datos que el
  cliente todavía no confirma van en `PENDIENTES` como `null` y la página muestra un marcador
  punteado en su lugar. Para completarlos basta reemplazar el `null` por el texto.
- `src/components/`: una sección por componente, con su CSS al lado.
- `src/utils/`: formato de números (estilo chileno), validaciones del formulario y el envío.
- `public/images` y `public/fonts`: fotos, logos y Poppins en TTF.

## Deploy

Se publica en GitHub Pages con el workflow de `.github/workflows`. La base `/cic-landing/` se
configura en `vite.config.js`; las rutas a `public/` pasan por `publico()` en `src/utils/rutas.js`
para respetarla.

## Pendiente

- El formulario de contacto todavía no envía a ningún lado (`src/utils/enviar.js` simula el envío).
- La página lleva `noindex` en `index.html` mientras sea una vista previa. Quitarlo al publicar.
