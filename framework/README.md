# Framework Example

This example contains [app] and [framework]

## Quick Start

Start an application using custom framework called yadan

```bash
$ cd app
$ npm install
$ npm link ../yadan
$ npm run dev
```

Yadan is a framework, it should be published to npm normally. With this example, you just `npm link` it.

## Run Test

Application

```bash
$ cd app
$ npm test
```

Framework

```bash
$ cd yadan
$ npm test
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

[app]: https://github.com/eggjs/examples/tree/master/framework/app
[framework]: https://github.com/eggjs/examples/tree/master/framework/yadan
