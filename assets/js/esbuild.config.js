// esbuild.config.js
require('esbuild').build({
  entryPoints: ['assets/js/main.js'],
  bundle: true,
  outfile: 'dist/worker.js',
  external: ['@cloudflare/kv-asset-handler'],
  format: 'esm',
  target: 'es2022',
}).catch(() => process.exit(1));
