import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const commonConfig = {
  entry: {
    app: [path.join(__dirname, '../app/assets/index.js')],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader?cacheDirectory=true', 'eslint-loader'],
        include: path.join(__dirname, '../app/assets'),
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NO_INTL: JSON.stringify(process.env.npm_config_nointl ? '1' : '0'),
      },
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../app/assets/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
};

if (process.env.npm_config_report) {
  commonConfig.plugins.push(new BundleAnalyzerPlugin());
}

export default commonConfig;
