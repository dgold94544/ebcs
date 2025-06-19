export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const path = url.pathname === '/' ? '/index.html' : url.pathname;
      const manifest = JSON.parse(env.__STATIC_CONTENT_MANIFEST);
      const assetKey = manifest[path.slice(1)];

      if (assetKey && env.__STATIC_CONTENT) {
        const asset = await env.__STATIC_CONTENT.get(assetKey, 'stream');
        return new Response(asset);
      }

      return new Response('Not found', { status: 404 });
    } catch (err) {
      return new Response(`Worker error: ${err.message}`, { status: 500 });
    }
  }
};
