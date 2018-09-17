import webpack from 'webpack';
import {
  Config,
  ConfigEnvironment
} from 'webpack-config';
import Uglify from 'uglifyjs-webpack-plugin';

export default new Config().extend('./webpack/webpack.config.base.js').merge({
  filename: __filename,
  mode: 'production',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new Uglify({
      uglifyOptions: {
        topLevel: true,
        mangle: true,
        compress: true,
        warnings: false,
        output: {
          comments: false,
          beautify: false,
        },
      },
    })
  ]
});
