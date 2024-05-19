/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/styleguide',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: './dist',
    emptyOutDir: true,

    sourcemap: true,
    rollupOptions: {
      input: 'packages/styleguide/src/index.ts',

      preserveEntrySignatures: 'strict',
      output: [
        {
          format: 'system',
          entryFileNames: 'system/styleguide.js',
          inlineDynamicImports: false,
        },

        {
          format: 'cjs',
          entryFileNames: 'commonjs/styleguide.cjs',
          inlineDynamicImports: false,
        },
        {
          format: 'es',
          entryFileNames: 'modules/styleguide.mjs',
          inlineDynamicImports: false,
        },
        {
          format: 'umd',
          name: 'styleguide',
          entryFileNames: 'umd/styleguide.js',
          inlineDynamicImports: false,
        },
      ],

      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
