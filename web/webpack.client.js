const path = require('path');
const baseConfig = require('./webpack.base');

// TODO: Create a configuration for production
const clientConfig = {
	...baseConfig,
	mode: 'development',
	// Tell webpack to root file of our server app
	entry: './src/client/index.js',

	// Tell webpack where to put output file
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist', 'public'),
	},
	devtool: 'inline-source-map',
};

module.exports = clientConfig;
