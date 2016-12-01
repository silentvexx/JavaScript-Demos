(function( global ) {

	System.config({
		paths: {
			"vendor/*": "../../vendor/angular2/2.1.1/*",
			"~/*": "./app/*"
		},
		map: {
			"@angular": "vendor/node_modules/@angular",
			"plugin-typescript": "vendor/node_modules/plugin-typescript/lib/plugin.js",
			"rxjs": "vendor/node_modules/rxjs",
			"ts": "vendor/node_modules/plugin-typescript",
			"typescript": "vendor/node_modules/typescript"
		},
		packages: {
			"@angular/common": {
				main: "bundles/common.umd.js",
				meta: {
					"bundles/common.umd.js": {
						typings: "index.d.ts"
					}
				}
			},
			"@angular/compiler": {
				main: "bundles/compiler.umd.js",
				meta: {
					"bundles/compiler.umd.js": {
						typings: "index.d.ts"
					}
				}
			},
			"@angular/core": {
				main: "bundles/core.umd.js",
				meta: {
					"bundles/core.umd.js": {
						typings: "index.d.ts"
					}
				}
			},
			"@angular/forms": {
				main: "bundles/forms.umd.js",
				meta: {
					"bundles/forms.umd.js": {
						typings: "index.d.ts"
					}
				}
			},
			"@angular/http": {
				main: "bundles/http.umd.js",
				meta: {
					"bundles/http.umd.js": {
						typings: "index.d.ts"
					}
				}
			},
			"@angular/platform-browser": {
				main: "bundles/platform-browser.umd.js",
				meta: {
					"bundles/platform-browser.umd.js": {
						typings: "index.d.ts"
					}
				}
			},
			"@angular/platform-browser-dynamic": {
				main: "bundles/platform-browser-dynamic.umd.js",
				meta: {
					"bundles/platform-browser-dynamic.umd.js": {
						typings: "index.d.ts"
					}
				}
			},
			"@angular/router": {
				main: "bundles/router.umd.js",
				meta: {
					"bundles/router.umd.js": {
						typings: "index.d.ts"
					}
				}
			},
			"app": { 
				main: "main.ts",
				defaultExtension: "ts",
				meta: {
					"*.ts": {
						loader: "ts"
					}
				}
			},
			"vendor/node_modules": {
				defaultExtension: "js"
			},
			"rxjs": {
				meta: {
					"*.js": {
						typings: true
					}
				}
			},
			"ts": {
				main: "lib/plugin.js"
			},
			"typescript": {
				main: "lib/typescript.js",
				meta: {
					"lib/typescript.js": {
						exports: "ts"
					}
				}
			}
		},
		transpiler: "plugin-typescript",
		transpiler: "ts",
		typescriptOptions: {
			emitDecoratorMetadata: true,
			experimentalDecorators: true,
			files: [ "vendor/node_modules/@types/node/index.d.ts" ],
			module: "commonjs",
			moduleResolution: "node",
			noImplicitAny: true,
			removeComments: false,
			sourceMap: true,
			suppressImplicitAnyIndexErrors: true,
			target: "es5",
			typeCheck: true
		}
	});

	// Load "./app/main.ts" (gets full path from package configuration above).
	global.bootstrapping = System
		.import( "app" )
		.then(
			function handleResolve() {

				console.info( "System.js successfully bootstrapped app." );

			},
			function handleReject( error ) {

				console.warn( "System.js could not bootstrap the app." );
				console.error( error );

				return( Promise.reject( error ) );

			}
		)
	;

})( window );
