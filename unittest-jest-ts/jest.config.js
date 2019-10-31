'use strict';

module.exports = {
  roots: [
    '<rootDir>/test',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: './test/env.js',
};
