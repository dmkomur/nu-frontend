import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        minify: false, // отключите минификацию для снижения нагрузки
        sourcemap: false, // отключите sourcemaps, если они не нужны
    },
    server: {
        host: "0.0.0.0",
        port: 3000,
    },
});
