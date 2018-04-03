import { EggAppConfig } from 'egg';

// extend egg
declare module 'egg' {
  type PowerPartial<T> = {
    [U in keyof T]?: {
      [V in keyof T[U]]?: {
        [W in keyof T[U][V]]?: T[U][V][W];
      }
    }
  }

  type EggConfig = PowerPartial<EggAppConfig>;
}