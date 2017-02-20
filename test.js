'use strict';

const fs = require('fs');
const path = require('path');
const semver = require('semver');
const chalk = require('chalk');
const execSync = require('child_process').execSync;

const flag = process.argv[2] ? '-c' : '';

const exampleDirs = fs.readdirSync(__dirname)
  .filter(name => [ '.git', 'node_modules', 'logs', 'run' ].indexOf(name) === -1)
  .map(name => path.join(__dirname, name))
  .filter(name => fs.statSync(name).isDirectory());

const skips = [];
const tests = [];
for (const dir of exampleDirs) {
  const dirname = path.basename(dir);
  if (!testExists(dir)) {
    console.log('%s directory %s',
      chalk.bgYellow('skip'),
      chalk.gray(dirname)
    );
    skips.push(dirname);
    continue;
  }
  console.log('%s directory %s',
    chalk.bgGreen('test'),
    chalk.gray(dirname)
  );
  const options = { cwd: dir, stdio: [ 0, 1, 2 ] };
  execSync(`../node_modules/.bin/npminstall ${flag}`, options);
  execSync('npm test', options);
  console.log('%s success\n', chalk.green('✔'));
  tests.push(dirname);
}

console.log('successed: %s\nskiped: %s',
  chalk.cyan(tests.join(', ')),
  chalk.yellow(skips.join(', '))
);

function testExists(dir) {
  try {
    const pkg = require(path.join(dir, 'package.json'));
    if (!pkg.scripts.test) return false;
    if (pkg.engines && pkg.engines.node && !semver.satisfies(process.version.slice(1), pkg.engines.node)) {
      console.log('%s %s require node version %s, now is using node %s',
        chalk.bgYellow('skip'),
        chalk.gray(path.basename(dir)),
        chalk.cyan(pkg.engines.node),
        chalk.cyan(process.version)
      );
      return false;
    }
    return true;
  } catch (_) {
    return false;
  }
}
