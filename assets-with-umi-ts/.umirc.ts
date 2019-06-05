import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [ 'umi-plugin-react', {
      antd: true,
      dva: true,
      title: 'assets-with-umi-ts',
      dll: false,
      dynamicImport: {
        webpackChunkName: true,
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  runtimePublicPath: true,
  disableCSSModules: true,
  cssModulesWithAffix: true,
};

export default config;
