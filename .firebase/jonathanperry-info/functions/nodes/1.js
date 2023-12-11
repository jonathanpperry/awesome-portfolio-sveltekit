

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a07108d3.js","_app/immutable/chunks/scheduler.4971ffed.js","_app/immutable/chunks/index.ce60ee9e.js","_app/immutable/chunks/singletons.36d7c9e7.js"];
export const stylesheets = [];
export const fonts = [];
