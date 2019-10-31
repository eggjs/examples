const {defaults} = require('jest-config');

module.exports = {
  "roots": [
    "<rootDir>/test"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  testEnvironment: './test/env.js',
};
