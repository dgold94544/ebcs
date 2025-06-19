// esbuild.config.js
require('esbuild').build({
  entryPoints: ['assets/js/main.js'],
  bundle: true,
  outfile: 'dist/worker.js',
  external: ['__STATIC_CONTENT_MANIFEST', '__STATIC_CONTENT'],
  format: 'esm',
  target: 'es2022',
  absWorkingDir: process.cwd(),
}).catch(() => process.exit(1));
