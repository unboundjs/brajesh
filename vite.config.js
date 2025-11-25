import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                audiobooks: resolve(__dirname, 'audiobooks.html'),
                notFound: resolve(__dirname, '404.html'),
            },
        },
    },
});
