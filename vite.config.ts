import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {

  return {
    publicDir: mode === 'lib' ? '' : 'public',
    build: mode === 'lib' ? {
      // Library build for NPM
      outDir: 'lib',
      lib: {
        entry: './src/index.ts',
        name: 'Chaldene',
        fileName: 'chaldene',
        formats: ['es', 'umd']
      },
      rollupOptions: {
        output: {
          exports: 'named'
        }
      }
    } : {
      outDir: 'dist'
    }
  }
})
