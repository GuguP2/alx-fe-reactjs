import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `Bearer ${GITHUB_API_KEY}`,
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));

