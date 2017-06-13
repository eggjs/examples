# sequelize-example

The [egg] example project that uses [egg-sequelize] plugin.

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development
```bash
$ npm install
$ createdb example-dev --owner postgres
$ npm run migrate:up
$ npm run dev
$ open http://localhost:7001/users
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```bash
$ createdb example-prod --owner postgres
$ NODE_ENV=production npm run migrate:up
$ EGG_SERVER_ENV=prod npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
[egg-sequelize]: https://github.com/eggjs/egg-sequelize