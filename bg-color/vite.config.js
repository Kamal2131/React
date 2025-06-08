import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
})
// This configuration file sets up a Vite project with React and Tailwind CSS.
// It imports the necessary plugins and exports a configuration object that includes these plugins.
