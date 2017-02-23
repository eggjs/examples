'use strict';

const EventEmitter = require('events');

/**
 * A mock Subscriber
 */
module.exports = class Subscriber extends EventEmitter {
  constructor() {
    super();

    this._start();
  }

  _start() {
    const interval = Math.random() * 5000 + 5000;
    setTimeout(() => {
      this.emit('changed');
      this._start();
    }, interval);
  }
};
