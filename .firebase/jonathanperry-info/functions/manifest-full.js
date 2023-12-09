export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/particles.json","favicon.png","images/profile.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.d53a6c4d.js","app":"_app/immutable/entry/app.e088adec.js","imports":["_app/immutable/entry/start.d53a6c4d.js","_app/immutable/chunks/scheduler.4971ffed.js","_app/immutable/chunks/singletons.46b8e9b3.js","_app/immutable/entry/app.e088adec.js","_app/immutable/chunks/scheduler.4971ffed.js","_app/immutable/chunks/index.ce60ee9e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
