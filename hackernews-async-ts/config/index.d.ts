import { EggAppConfig } from 'egg';
import defaultConfig from './config.default';
import * as localConfig from './config.local';
import prodConfig from './config.prod';

type DefaultConfig = ReturnType<typeof defaultConfig>;
type LocalConfig = typeof localConfig;
type ProdConfig = typeof prodConfig;
type NewAppConfig = EggAppConfig & DefaultConfig & LocalConfig & ProdConfig;

declare module 'egg' {
  interface Application {
    config: NewAppConfig;
  }
}