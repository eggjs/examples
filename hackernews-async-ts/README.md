# egg-example-hackernews-async

[Hacker News](https://news.ycombinator.com/) showcase using async/await for egg

## QuickStart

### Development
```shell
$ npm install
$ npm run tsc:w
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

Please ensure your node version is `>=7.6.0` for async await support without flag. If your node version is `>=7.0.0 < 7.6.0`, you can run npm scripts with harmony flag

```shell
# start server
npm run dev -- --harmony-async-await
# run test cases
npm run test-local -- --harmony-async-await
```
