#!/usr/bin/env bash

cd helloworld
rm -rf node_modules package-lock.json
npm install --registry=https://registry.npmmirror.com
npm run ci
cd helloworld

