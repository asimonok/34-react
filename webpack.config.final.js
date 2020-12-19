const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      'node_modules',
      'src'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          }
        ],
      },
      {
        test: /\.png$/i,
        use: 'file-loader',
      },
      {
        test: /\.woff2$/i,
        use: 'file-loader',
      },
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new BundleAnalyzerPlugin(),
    new CssMinimizerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}
