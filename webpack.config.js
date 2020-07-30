const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config.js' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		blocks: path.resolve( process.cwd(), 'src', 'blocks.scss' ),
		editor: path.resolve( process.cwd(), 'src', 'editor.scss' ),
		theme: path.resolve( process.cwd(), 'src', 'theme.scss' ),
		woocommerce: path.resolve( process.cwd(), 'src', 'woocommerce.scss' ),
	},
	output: {
		filename: '[name].js',
		path: path.resolve( process.cwd(), 'build' ),
	},
	optimization: {
		...defaultConfig.optimization,
		splitChunks: {
			cacheGroups: {
				editor: {
					name: 'editor',
					test: /editor\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				blocks: {
					name: 'blocks',
					test: /blocks\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				theme: {
					name: 'theme',
					test: /theme\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				woocommerce: {
					name: 'woocommerce',
					test: /woocommerce\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
				},
				default: false,
			},
		},
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
