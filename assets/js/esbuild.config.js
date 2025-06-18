// esbuild.config.js
require('esbuild').build({
  entryPoints: ['assets/js/main.js'],
  bundle: true,
  outfile: 'dist/worker.js',
  external: ['@cloudflare/kv-asset-handler'],
  format: 'esm',
  target: 'es2022',
  absWorkingDir: process.cwd(),
}).catch(() => process.exit(1));
