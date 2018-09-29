'use strict';

const path = require('path');
const chalk = require('chalk');
const Command = require('./base');

class Test extends Command {
  constructor(rawArgs) {
    super(rawArgs);

    this.options = {
      c: {
        type: 'boolean',
        description: 'in China',
      },
    };
  }

  async run({ argv }) {
    const dirs = await this.getExamples();

    const skip = new Set();
    const success = new Set();
    const fail = new Set();

    for (const dir of dirs) {
      if (!this.testExists(dir)) {
        console.info('%s directory %s',
          chalk.bgYellow('skip'),
          chalk.gray(dir)
        );
        skip.add(dir);
        continue;
      }

      console.info('%s directory %s',
        chalk.bgGreen('test'),
        chalk.gray(dir)
      );
      try {
        const flag = argv.c ? ' -c' : '';
        await this.runscript(`npmupdate${flag}`, { cwd: dir });
        await this.runscript('npm test', { cwd: dir });
        console.info('%s success\n', chalk.green('✔'));
        success.add(dir);
      } catch (err) {
        fail.add(dir);
        console.info('%s fail\n', chalk.red('✗'));
      }
    }

    console.info(chalk.green('success %s'), success.size);
    console.info(chalk.red('fail %s'), fail.size);
    console.info(chalk.cyan('skip %s'), skip.size);
    if (fail.size > 0) process.exit(fail.size);
  }

  testExists(dir) {
    try {
      const pkg = require(path.join(this.cwd, dir, 'package.json'));
      if (!pkg.scripts.test) return false;
      return true;
    } catch (_) {
      console.log(_);
      return false;
    }
  }

}

module.exports = Test;
