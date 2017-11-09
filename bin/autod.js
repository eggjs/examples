'use strict';

const Command = require('./base');

class Autod extends Command {

  async run() {
    const dirs = await this.getExamples();
    for (const dir of dirs) {
      try {
        await this.runscript(`autod -p ${dir}`);
      } catch (_) {
        // nothing
      }
    }
  }

}

module.exports = Autod;
