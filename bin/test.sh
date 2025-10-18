#!/usr/bin/env bash

set -eux -o pipefail

test() {
  echo "Test $1"
  cd "$1"
  pwd
  rm -rf node_modules package-lock.json
  ut 
  ut ci
  cd ..
}

test body-parser-example
test helloworld
test hello-tegg
test hackernews-typescript
test hackernews-tegg
