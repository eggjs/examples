## bodyParser

built-in [bodyparser](https://github.com/koajs/bodyparser) help us to parse `POST` body.

by default, only accepet `form` and `json`, access by `ctx.request.body`.

## Custom Type

Treat `application/custom-json` as `JSON` type then auto parse:

```js
// config/config.default.js
exports.bodyParser = {
  extendTypes: {
    json: 'application/custom-json',
  },
};
```

## XML

1. add `text` to `enableTypes`.
2. treat `xml` as `text`, so we could access it by `ctx.request.body`.
3. then parse it at `Controller` as your wish.

```js
// config/config.default.js
exports.bodyParser = {
  enableTypes: [ 'json', 'form', 'text' ],
  extendTypes: {
    text: [ 'application/xml' ],
  },
};
```

```js
// app/controller/home.js
const { xml2js } = require('xml-js');

class HomeController extends Controller {
  async xml() {
    const { ctx } = this;

    const xmlContent = xml2js(ctx.request.body);
    const body = xmlContent.elements[0].attributes;

    ctx.body = {
      type: ctx.get('content-type'),
      body,
    };
  }
}

module.exports = HomeController;
```

## Size

By default, body size is limit to `100kb`, you could custom it by:

```js
// config/config.default.js
module.exports = {
  bodyParser: {
    jsonLimit: '1mb',
    formLimit: '1mb',
  },
};
```
