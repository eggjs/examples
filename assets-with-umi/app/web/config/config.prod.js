export default {
  hash: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        hd: true,
        antd: true,
        dynamicImport: {
          webpackChunkName: true,
        },
      },
    ],
  ],
  publicPath: '/public/',
  outputPath: '../public',
  manifest: {
    fileName: '../../config/manifest.json',
  },
};
