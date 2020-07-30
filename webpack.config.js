const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		style: path.resolve( process.cwd(), 'src', 'blocks.scss' ),
		editor: path.resolve( process.cwd(), 'src', 'editor.scss' ),
		theme: path.resolve( process.cwd(), 'src', 'theme.scss' ),
		woocommerce: path.resolve( process.cwd(), 'src', 'woocommerce.scss' ),
	},
	optimization: {
		...defaultConfig.optimization,
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
		],
	},
	plugins: [
		...defaultConfig.plugins,
	],
};
