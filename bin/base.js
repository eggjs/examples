'use strict';

const path = require('path');
const Command = require('common-bin');
const globby = require('globby');
const runscript = require('runscript');
const chalk = require('chalk');

class Base extends Command {
  constructor(rawArgs) {
    super(rawArgs);

    this.options = {
      verbose: {
        type: 'boolean',
        description: 'Show more infomation',
        alias: 'V',
      },
    };
  }

  get cwd() {
    return process.cwd();
  }

  async getExamples() {
    const pattern = [
      '**/package.json',
      '!**/node_modules/**',
      '!**/fixtures/**',
      '!**/plugin/**',
    ];
    const files = await globby(pattern, { cwd: this.cwd });
    return files.filter(file => file !== 'package.json').map(file => path.dirname(file));
  }

  async runscript(command, opt = {}) {
    if (!opt.stdio && !this.context.argv.verbose) {
      opt.stdio = 'pipe';
    }

    console.info('%s %s %s',
      chalk.bgBlue('RUN'),
      command,
      chalk.gray(opt.cwd ? `in ${opt.cwd}` : ''));

    try {
      await runscript(command, opt);
    } catch (err) {
      if (err.stdio.stdout) {
        console.log(err.stdio.stdout.toString());
      }
      if (err.stdio.stderr) {
        console.log(err.stdio.stderr.toString());
      }
      console.info('%s %s', chalk.bgRed('Fail'), command);
      throw err;
    }
  }
}

module.exports = Base;
