import WebpackNotifierPlugin from 'webpack-notifier';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import { environment } from 'webpack-config';
const baseDir = environment.valueOf('dir');

import {
  Config,
  ConfigEnvironment
} from 'webpack-config';

export default new Config().extend('./webpack/webpack.config.base.js').merge({
  filename: __filename,
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    pathinfo: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: [`${baseDir}/app`],
        loader: 'eslint-loader',
        options: {
          fix: true,
        }
      },
      {
        enforce: 'pre',
        test: /\.jsx$/,
        include: [`${baseDir}/app`],
        loader: 'eslint-loader',
        options: {
          fix: true,
        }
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
    new BrowserSyncPlugin({
      proxy: 'http://localhost:8888/idyll-template/'
    })
  ]
});
