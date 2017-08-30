export class DefaultConfig {
  news =  {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
};

export default new DefaultConfig();

declare module 'egg' {
  export interface Application {
    config: EggAppConfig & DefaultConfig;
  }
}
