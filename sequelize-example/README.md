# sequelize-example

[![build][build]][build-url]
[![coverage][cover]][cover-url]

The egg example project that uses egg-sequelize plugin.

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Unittest
```shell
$ createdb example-unittest --owner postgres
$ npm test
```

### Development
```shell
$ npm install
$ createdb example-dev --owner postgres
$ npm run migrate:up
$ npm run dev
$ open http://localhost:7001/users
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```shell
$ createdb example-prod --owner postgres
$ NODE_ENV=production npm run migrate:up
$ EGG_SERVER_ENV=prod npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
[build]: https://travis-ci.org/iyuq/sequelize-example.svg?branch=master
[build-url]: https://travis-ci.org/iyuq/sequelize-example
[cover]: https://codecov.io/gh/iyuq/sequelize-example/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/iyuq/sequelize-example