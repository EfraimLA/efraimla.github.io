export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/not_found.jpeg","svg/angular_logo.svg","svg/birthday_cake.svg","svg/java_logo.svg","svg/logo_github.svg","svg/mexico_flag.svg","svg/mongodb_logo.svg","svg/postgresql_logo.svg","svg/python_logo.svg","svg/quarkus_logo.svg","svg/rust_logo.svg","svg/typescript_logo.svg","svg/vertx_logo.svg","svg/vuejs_logo.svg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.2f0401bf.js","app":"_app/immutable/entry/app.1a56daf4.js","imports":["_app/immutable/entry/start.2f0401bf.js","_app/immutable/chunks/scheduler.dfa6626f.js","_app/immutable/chunks/index.e2a81970.js","_app/immutable/entry/app.1a56daf4.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/scheduler.dfa6626f.js","_app/immutable/chunks/index.f3a1c94a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
};
