## About this example
this example is a simple quickstart of Egg, it includes the basic and comprehensive usages of Egg such as Controller,Service and some 
simple configurations, moreover, it has the corresponding unit tests. you can follow this simple example and build your Egg application step by step.

## How to run it locally

### Development
```shell
$ npm install
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```shell
$ EGG_SERVER_ENV=prod npm start
```

### Npm Scripts

- Use `npm run autod` to auto detect dependencies upgrade
- Use `npm run lint` to check code style
- Use `npm test` to run unit test

### Requirement

Please ensure your node version is `>=8.0` for async await support without flag. If your node version is `>=7.0.0 < 8.0`, you can run npm scripts with harmony flag

```shell
# start server
npm run dev -- --harmony-async-await
# run test cases
npm run test-local -- --harmony-async-await
```

## some problems you might encounter
- lack of MVC model development experience, click [here](https://www.zhihu.com/question/27897315) to learn more
- some concepts such as middleware, extend, helper are difficult to understand, see related [docs](https://eggjs.org/) to know more
- encounter some errors during development, find [issues](https://github.com/eggjs/egg/issues) to check if some solutions have been provided
