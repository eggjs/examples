# egg-example-hackernews-async

[Hacker News](https://news.ycombinator.com/) showcase using async/await for egg

## QuickStart

**Please ensure your node version is 7.6.0+.**

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

### npm scripts

- Use `npm run autod` to auto detect dependencies upgrade
- Use `npm run lint` to check code style
- Use `npm test` to run unit test
