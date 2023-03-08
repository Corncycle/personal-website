const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// When editing, remember to edit webpack.config.js as well if desired changes
// should be present in development

module.exports = {
  entry: './src/index.js',
  mode: 'production',
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Caleb Stromberg',
      template: './src/index.html',
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
