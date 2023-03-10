const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// When editing, remember to edit webpack.prod.js as well if desired changes
// should be present in production builds

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: './dist',
    historyApiFallback: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caleb Stromberg',
      template: './src/index.html',
      favicon: './static/favicon.ico',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'static',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
}
