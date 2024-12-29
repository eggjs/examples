import { Application } from 'egg';

export default (app: Application) => {
  app.router.get('/', app.controller.home.render);
  app.router.get('/foo', app.controller.foo.render);
};
