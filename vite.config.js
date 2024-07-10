import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< Updated upstream
  plugins: [react()],
})
=======
 server: {
    host: '0.0.0.0', // This makes the server accessible externally
    port: 5173, // You can keep this or change to your preferred port
  },
	plugins: [react()],
})
>>>>>>> Stashed changes
