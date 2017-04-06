/**
 * Created by thram on 18/01/17.
 */
import HtmlwebpackPlugin from 'html-webpack-plugin';

const INDEX_HTML_SETUP = {
  template: 'node_modules/html-webpack-template/index.ejs',
  title: 'Konan',
  appMountId: 'konan',
  meta: [
    {
      name: 'viewport',
      content: 'user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1',
    },
  ],
  inject: false,
};

export default {
  cache: true,
  entry: `${__dirname}/admin/index`,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   enforce: 'pre',
      //   use: ['eslint-loader'],
      //   include: `${__dirname}/admin`,
      // },
      { test: /\.jsx?$/, use: 'babel-loader?cacheDirectory=true', include: `${__dirname}/admin/` },
      { test: /\.(jpe?g|png|gif|svg)$/i, use: 'file-loader?name=images/[name].[ext]' },
      { test: /\.(mp3)$/i, use: 'file-loader?name=audio/[name].[ext]' },
      { test: /\.(otf)$/i, use: 'file-loader?name=fonts/[name].[ext]' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }, 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin(INDEX_HTML_SETUP),
  ],
  performance: {
    hints: false,
  },
};
