import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  assets : {
    enable: true,
    package: 'egg-view-assets',
  },
};

export default plugin;
