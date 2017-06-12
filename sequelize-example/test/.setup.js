'use strict';

const execSync = require('child_process').execSync;

execSync('psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = \'example-unittest\'" | grep -q 1 || psql -U postgres -c \'CREATE DATABASE "example-unittest"\'');
console.log('create db success');