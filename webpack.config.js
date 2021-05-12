const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: "./components/index.js",
    // core/coreui: "./packages/core-ui/src/components/index.js",
    // wireframe/wireframeui: "./packages/wireframe-ui/src/components/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: 'dist',
      type: 'umd',
    },
    clean: true,
  },
  mode: "development",
  // devtool: "source-map",
  // externals: {
  //   // lodash: {
  //   //   commonjs: 'lodash',
  //   //   commonjs2: 'lodash',
  //   //   amd: 'lodash',
  //   //   root: '_',
  //   // },
  // },
  plugins: [
    // Generate an external css file
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: 'asset/resource',
      // },
    ]
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