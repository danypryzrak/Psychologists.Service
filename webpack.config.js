const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/psychologists.html',
      filename: 'psychologists.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/favorites.html',
      filename: 'favorites.html',
      chunks: ['index'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/css', to: 'css' }, // Копируем папку со стилями в dist
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/image', to: 'image' }, // Копируем папку со стилями в dist
      ],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
