import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.all('/restapi/*', controller.home.api);
  router.get('*', controller.home.index);
};
