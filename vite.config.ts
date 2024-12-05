import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pokemonDetail",
      filename: "remoteEntry1.js",
      exposes: {
        "./PokemonDetail": "./src/components/PokemonDetail",
      },
      shared: ['react', 'react-dom']
    }),

  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
