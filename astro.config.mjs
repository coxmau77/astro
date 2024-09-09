// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Integraciones de Astro con Tailwind y React
  integrations: [tailwind(), react()],

  // Configuraciones adicionales si las necesitas
  build: {
    // Ejemplo de opciones adicionales (opcional)
    // client: './dist/client', // Cambia la ubicación de los archivos del cliente
    // server: './dist/server', // Cambia la ubicación de los archivos del servidor
    // assets: './dist/assets'  // Carpeta para activos (imágenes, fuentes, etc.)
  },
});
