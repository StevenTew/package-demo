const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsRules = {
  // see also .babelrc
  test: /\.js$/,
  exclude: /node_modules/,
  use: ["babel-loader"],
};
const imgRules = {
  // Inline all images so consumer doesn't have to transfer images to public folder
  test: /\.(svg|jpg|png)$/,
  type: "asset/inline",
};
const styleRules = {
  test: /\.s?css$/i,
  exclude: /node_modules/,
  use: [
    "style-loader",
    "css-loader",
    // {
    //   loader: "postcss-loader",
    //   options: {
    //     postcssOptions: {
    //       plugins: ["autoprefixer"],
    //     },
    //   },
    // },
    "sass-loader",
  ],
};
// const fontRule = {
//   test: /\.(woff|woff2|eot|ttf|otf)$/i,
//   type: 'asset/source',
// };

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "production",
  // devtool: "source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: 'dist',
      type: 'umd',
    },
    clean: true,
  },
  externals: {
    // Don't bundle these, they're peer dependencies that will be provided by the consumer
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes"
    }
  },
  // plugins: [
  //   // Generate an external css file with a hash in the filename
  //   new MiniCssExtractPlugin({
  //     filename: "styles.css",
  //   }),
  // ],
  module: {
    rules: [jsRules, styleRules, imgRules],
  },
  // optimization: {
  //   //   splitChunks: {
  //   //     chunks: 'all',
  //   //   },
  //   moduleIds: 'deterministic',
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
};