/* eslint-disable no-unused-vars */
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths"
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin(), tsconfigPaths(), tailwindcss()],
    server: {
        port: 51160,
    }
})