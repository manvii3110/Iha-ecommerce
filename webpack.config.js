const path = require("path");
const glob = require("glob");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer"); // help tailwindcss to work

function toObject(paths) {
	var ret = {};

	paths.forEach(function (path) {
		let filename = path.replace("./React_Files/", "").replace(".js", "");
		// you can define entry names mapped to [filename] here
		ret[filename] = path;
	});

	console.log(ret);
	return ret;
}

module.exports = {
	entry: toObject(glob.sync("./React_Files/*.js")),
	output: {
		path: path.resolve("./frontend/static/frontend/js/"),
		filename: ({ chunk }) => {
			var ChunkName = chunk.name.replace("React_Files", "");
			return `../js/${ChunkName}/${ChunkName}.js`;
		},
		chunkFilename: ({ chunk }) => `${chunk.runtime}/runtime/[id].js`,
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(css|scss|sass)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
					{
						loader: "postcss-loader", // postcss loader needed for tailwindcss
						options: {
							postcssOptions: {
								ident: "postcss",
								plugins: [tailwindcss, autoprefixer],
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "../css/[name].css",
			chunkFilename: "[id].css",
		}),
		require("@tailwindcss/forms"),
	],
};
