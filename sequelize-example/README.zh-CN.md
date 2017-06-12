# sequelize-example

[![build][build]][build-url]
[![coverage][cover]][cover-url]

使用egg-sequelize插件的egg示例项目。

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发
```bash
$ npm install
$ createdb example-dev --owner postgres
$ npm run migrate:up
$ npm run dev
$ open http://localhost:7001/users
```

### 部署

线上正式环境用 `EGG_SERVER_ENV=prod` 来启动。

```bash
$ createdb example-prod --owner postgres
$ NODE_ENV=production npm run migrate:up
$ EGG_SERVER_ENV=prod npm start
```

### 单元测试
- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 -单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
[build]: https://travis-ci.org/iyuq/sequelize-example.svg?branch=master
[build-url]: https://travis-ci.org/iyuq/sequelize-example
[cover]: https://codecov.io/gh/iyuq/sequelize-example/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/iyuq/sequelize-example