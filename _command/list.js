'use strict';

const Command = require('./base');

class List extends Command {
  async run() {
    const cache = new Set();
    const dirs = await this.getExamples();
    for (let dir of dirs) {
      dir = dir.split('/')[0];
      if (cache.has(dir)) continue;
      cache.add(dir);
      console.info('- [%s](https://github.com/eggjs/examples/tree/master/%s)', dir, dir);
    }
  }
}

module.exports = List;
