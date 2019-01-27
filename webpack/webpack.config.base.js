import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import Config, { environment } from 'webpack-config';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const baseDir = environment.valueOf('dir');
const env = environment.valueOf('env');

export default new Config().merge({
  bail: true,
  entry: {
    index: ['whatwg-fetch', './app/app.jsx'],
  },
  node: { // fix for module not found error: https://github.com/webpack-contrib/css-loader/issues/447
    fs: 'empty'
  },
  output: {
    path: `${baseDir}/dist`,
    filename: '[name].js',
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
    new CopyWebpackPlugin([
      {
        from: 'app/resources',
        to: 'resources'
      },
      {
        from: 'app/data/static_data_files',
        to: 'data'
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.idyll$/,
        use: 'raw-loader'
      },
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: { inline: true },
        }
      },
      {
        test: /\.js$/,
        include: [`${baseDir}/app`],
        use: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        include: [`${baseDir}/app`],
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
            'sass-loader',
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
            'less-loader',
          ],
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'font/',
          }
        }
      },
      {
        test: /\.(png|jpg|gif)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.less']
  },
});
