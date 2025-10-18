// This file is created by egg-ts-helper@3.2.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportNews from '../../../app/controller/news.js';

declare module 'egg' {
  interface IController {
    news: ExportNews;
  }
}
