

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.87c34d60.js","_app/immutable/chunks/scheduler.4971ffed.js","_app/immutable/chunks/index.ce60ee9e.js"];
export const stylesheets = ["_app/immutable/assets/0.e86ff634.css"];
export const fonts = [];
