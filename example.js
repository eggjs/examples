#!/usr/bin/env node

'use strict';

const path = require('path');
const fs = require('mz/fs');
const runscript = require('runscript');

const cwd = process.cwd();
const action = process.argv[2];
console.log(action);

process.env.PATH = 'node_modules/.bin:' + process.env.PATH;

const fn = ({
  async autod() {
    const dirs = await getExamples();
    console.log(dirs);
    for (const dir of dirs) {
      console.info('Run autod in %s', dir);
      await runscript(`autod -p ${dir}`);
    }
  },

})[action];

if (!fn) {
  console.error('%s is not found', action);
  process.exit(1);
}

fn().catch(err => console.log(err.stack));

async function getExamples() {
  const dirs = await fs.readdir(cwd);
  const arr = [];
  for (const dir of dirs) {
    const exist = await fs.exists(path.join(dir, 'package.json'));
    if (!exist) continue;

    arr.push(dir);
  }

  return arr;
}
