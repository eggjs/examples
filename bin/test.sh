#!/usr/bin/env bash

test() {
  echo "Test $1"
  cd $1
  pwd
  rm -rf node_modules package-lock.json
  npm install --registry=https://registry.npmmirror.com
  npm run ci
  cd ..
}

test helloworld
test hello-tegg
