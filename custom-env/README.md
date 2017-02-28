# custom environment

Egg will load different config file in different env, in this example we create `config.default.js`, `config.sit.js` and `config.prod.js`.

Egg will load `config.sit.js` when lanched by `EGG_SERVER_ENV=sit npm run dev`. You can get see the response

```bash
$ curl http://127.0.0.1:7001
{"env":"sit","config":"sit keys"}%    
```
