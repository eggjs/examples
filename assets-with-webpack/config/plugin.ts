import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  assets: {
    enable: true,
    package: 'egg-view-assets',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
};

export default plugin;
