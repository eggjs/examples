'use strict';

module.exports = () => {
  const config = {};

  config.news = {
    getTopStories: 'http://localhost:5678/data/hackernews/getTopStories', // datahub api path
  };

  return config;
};
