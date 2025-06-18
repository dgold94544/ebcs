import manifest from '__STATIC_CONTENT_MANIFEST';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname === '/' ? '/index.html' : url.pathname;
    const assetKey = manifest[path.slice(1)];

    if (assetKey && env.__STATIC_CONTENT) {
      const asset = await env.__STATIC_CONTENT.get(assetKey, 'stream');
      return new Response(asset);
    }

    return new Response('Not found', { status: 404 });
  }
};
