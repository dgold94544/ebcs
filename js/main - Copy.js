export default {
  async fetch(request, env, ctx) {
    return env.assets.fetch(request);
  }
};
