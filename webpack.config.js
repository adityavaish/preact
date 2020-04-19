const path = require('path');

module.exports = [
	{
		mode: 'production',
		entry: 'src/index.js',
		optimization: {
			minimize: false
		},
		output: {
			filename: 'preact.umd.max.js',
			library: 'preact',
			libraryTarget: 'umd'
		}
	},
	{
		mode: 'production',
		entry: 'hooks/src/index.js',
		optimization: {
			minimize: false
		},
		output: {
			filename: 'hooks/hooks.umd.max.js',
			library: 'preactHooks',
			libraryTarget: 'umd'
		}
	}
];
