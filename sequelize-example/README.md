# sequelize-example

The [egg] example project that uses [egg-sequelize] plugin. It will show you how to use sequelize in egg project, use [migrations] to help you manage changes of database and use [factory-girl] to help you write test cases more maintainable.

## QuickStart

### Dependencies

- install mysql and create database

```
brew install mysql # macOS
brew service start mysql

mysql
  > create database `egg-sequelize-example-dev`;
  > create database `egg-sequelize-example-unittest`;
```

- install dependencies

```
npm install
```

### Start Server and Run Test

- prepare database structure

```
# for develop
npm run sequelize -- db:migrate
# for unittest
NODE_ENV=test npm run sequelize -- db:migrate
```

- start project

```
npm run dev
```

- run test

```
npm test
```

[egg]: https://eggjs.org
[egg-sequelize]: https://github.com/eggjs/egg-sequelize
[sequelize]: http://docs.sequelizejs.com/
[migrations]: http://docs.sequelizejs.com/manual/tutorial/migrations.html
[factory-girl]: https://github.com/aexmachina/factory-girl
