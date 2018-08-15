# sequelize-example

这个 [egg] 示例项目示范如何使用 [egg-sequelize] 插件。它会展示如何在 egg 项目中使用 [sequelize] 连接数据库，使用 [migrations] 来管理数据结构变更，并通过 [factory-girl] 来编写更易于维护的测试用例。

## 快速开始

### 安装依赖

- 安装 mysql 并建立数据库

```
brew install mysql # macOS
brew service start mysql

mysql
  > create database `egg-sequelize-example-dev`;
  > create database `egg-sequelize-example-unittest`;
```

- 安装 node 依赖

```
npm install
```

### 启动和测试

- 执行 migration 执行数据变更

```
# for develop
npm run sequelize -- db:migrate
# for unittest
NODE_ENV=test npm run sequelize -- db:migrate
```

- 启动项目

```
npm run dev
```

- 运行测试

```
npm test
```

[egg]: https://eggjs.org
[egg-sequelize]: https://github.com/eggjs/egg-sequelize
[sequelize]: http://docs.sequelizejs.com/
[migrations]: http://docs.sequelizejs.com/manual/tutorial/migrations.html
[factory-girl]: https://github.com/aexmachina/factory-girl
