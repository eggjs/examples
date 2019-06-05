import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
// tslint:disable-next-line:no-multi-spaces
const config: IConfig =  {
  hash: true,
  publicPath: '',
  outputPath: '../public',
  manifest: {
    fileName: '../../config/manifest.json',
  },
};

export default config;
