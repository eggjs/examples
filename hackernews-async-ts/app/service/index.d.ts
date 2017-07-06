import HackerNews from './HackerNews';
declare module 'egg' {
  export interface IService {
    hackerNews: HackerNews;
  }
}
