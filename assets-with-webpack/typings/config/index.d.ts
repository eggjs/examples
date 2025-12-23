// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import { EggAppConfig } from 'egg';
import ExportConfigDefault from '../../config/config.default';
type ConfigDefault = ReturnType<typeof ExportConfigDefault>;
declare module 'egg' {
  type NewEggAppConfig = ConfigDefault;
  interface EggAppConfig extends NewEggAppConfig { }
}