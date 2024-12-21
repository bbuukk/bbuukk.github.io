import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import Inspect from 'vite-plugin-inspect';

import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  publicDir: resolve(__dirname, './public'),
  envDir: __dirname,
  plugins: [
    Inspect(),
    createHtmlPlugin({
      minify: true,
      /**
       * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
       * @default src/main.ts
       */
      entry: 'src/main.ts',
      /**
       * If you want to store `index.html` in the specified folder, you can modify it, otherwise no configuration is required
       * @default index.html
       */
      // template: 'public/index.html',

      /**
       * Data that needs to be injected into the index.html ejs template
       */
      inject: {
        data: {
          injectScript: `<script src="./inject.js"></script>`
        },
        tags: [
          {
            injectTo: 'body-prepend',
            tag: 'div',
            attrs: {
              id: 'tag'
            }
          }
        ]
      }
    })
  ],
  build: {
    outDir: resolve(__dirname, './dist')
    // base: '/'
    // sourcemap: true,
    // emptyOutDir: true
    // minify: true,
  },
  esbuild: {
    // minify: true,
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': '/',
      '@styles': resolve(__dirname, './src/assets/styles')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  server: {
    port: 3000
    // host: 'localhost',
    // base: './'
  }
});
