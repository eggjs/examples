export default {
  hash: false,
  plugins: [
    [
      'umi-plugin-react',
      {
        hd: true,
        antd: true,
        dynamicImport: {
          webpackChunkName: true,
        },
        routes: { exclude: [ /model\.js/, /service\.js/, /children/ ] },
      },
    ],
  ],
  outputPath: '../public',
  disableCSSModules: true,
  cssModulesWithAffix: true,
  manifest: {
    fileName: '../../config/manifest.json',
  },
  proxy: {
    '/restapi': {
      target: 'http://127.0.0.1:7001/',
      changeOrigin: true,
    },
  },
};
