import NewsController from './news';
declare module 'egg' {
  export interface IController {
    news: NewsController;
  }
}
