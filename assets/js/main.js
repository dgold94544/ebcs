export default {
  async fetch(request, env, ctx) {
    try {
      if (!env.__STATIC_CONTENT || !env.__STATIC_CONTENT_MANIFEST) {
        return new Response('Missing static content bindings', { status: 500 });
      }

      const manifest = JSON.parse(env.__STATIC_CONTENT_MANIFEST);
      const url = new URL(request.url);
      const path = url.pathname === '/' ? '/index.html' : url.pathname;
      const assetKey = manifest[path.slice(1)];

      if (assetKey) {
        const asset = await env.__STATIC_CONTENT.get(assetKey, 'stream');
        return new Response(asset);
      }

      return new Response('Asset not found', { status: 404 });
    } catch (err) {
      return new Response(`Worker error: ${err.message}`, { status: 500 });
    }
  }
};
