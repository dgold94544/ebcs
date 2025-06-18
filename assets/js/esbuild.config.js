// esbuild.config.js
require('esbuild').build({
  entryPoints: ['assets/js/main.js'],
  bundle: true,
  outfile: 'dist/main.js',
  external: ['@cloudflare/kv-asset-handler'],
}).catch(() => process.exit(1));
