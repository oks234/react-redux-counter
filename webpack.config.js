// webpack.config.js

const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'development', // 'development', 'production'
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: {
					loader: "html-loader",
					options: {minimize: true}
				}
			},
			{ // css files
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{ // image files
				test: /\.(png|svg|jpg|jpeg|gif)/,
				use: [
					'file-loader'
				]
			},
			{ // font files
				test: /\.(woff|woff2|eot|ttf|otf)/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
};