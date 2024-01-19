/// <reference types="vitest" />
import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        includeSource: ["src/**/*.ts"],
        globals: true,
        alias: {
            "@core":  new URL('./src/core', import.meta.url).pathname,
            "@test": new URL('./src/test', import.meta.url).pathname,
        }
    },
});