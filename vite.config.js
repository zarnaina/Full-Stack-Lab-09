// Import the function that creates the Vite settings.
import { defineConfig } from 'vite';
// Import the plugin that lets Vite understand React and JSX.
import react from '@vitejs/plugin-react';
 
// Export the settings. Vite reads this file when it starts.
export default defineConfig({
  plugins: [react()], // turn on React support
  server: { port: 5173, open: true }, // dev server on port 5173, open the browser by itself
});
