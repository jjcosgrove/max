// modules
import path from 'path'
import nodeExternals from 'webpack-node-externals'
import WatchIgnorePlugin from 'watch-ignore-webpack-plugin'
import webpack from 'webpack'

const config = {
  target: 'node',
  mode: process.env.NODE_ENV,
  externals: [nodeExternals()],
  entry: {
    command: [
      './src/max'
    ]
  },
  watch: false, // process.env.NODE_ENV === 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'max.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {}
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@packageJSON': path.resolve(__dirname, './package.json'),
      '@': path.resolve(__dirname, './src'),
      '@config': path.resolve(__dirname, './src/config'),
      '@store': path.resolve(__dirname, './src/store')
    },
    extensions: ['*', '.js', '.json']
  },
  plugins: [
    new WatchIgnorePlugin([
      path.resolve(__dirname, 'build')
    ]),
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true
    })
  ]
}

export default config
