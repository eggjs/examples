#!/usr/bin/env node

'use strict';

const path = require('path');
const Command = require('common-bin');

class Example extends Command {
  constructor(rawArgs) {
    super(rawArgs);

    this.load(path.join(__dirname, 'bin'));
  }
}

new Example().start();
