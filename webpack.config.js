const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    main: ['babel-polyfill', path.resolve(__dirname, 'src/index.jsx')]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    // publicPath: './'
  },

  devServer: {
    historyApiFallback: true
  },

  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: ['transform-class-properties']
            }
          },
          // {
          //   loader: 'react-svg-loader',
          //   options: {
          //     jsx: true // true outputs JSX tags
          //   }
          // }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader',
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|webm)$/,
        loader: 'file-loader',
        options: {},
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.json?$/,
        use: {
          loader: 'json-loader',
        },
      },
    ]
  },

  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
      // test: '/node_modules/',
      // enforce: true
    }
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      // don't have to specify
      // globDirectory: path.resolve(__dirname, 'dist'),
      // globPatterns: ['*.{html,js,css,jpg,gif,png'],
      swDest: path.resolve(__dirname, 'dist/sw.js'),
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('/'),
          handler: 'StaleWhileRevalidate'
        },
        {
          urlPattern: new RegExp('https://www.googleapis.com/'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'api',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 72
            },
            cacheableResponse: { statuses: [0, 200] }
          }
        }
      ]
    })
    // new BundleAnalyzerPlugin()
  ]
}
