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
			{ // js, jsx files
				test: /\.(m?js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{ // css files
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
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