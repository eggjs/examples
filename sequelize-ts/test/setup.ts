'use strict';

import { app } from 'egg-mock/bootstrap';
import factories from './factories';

before(() => {
  // defined app.factory for build test data
  factories(app);
});

afterEach(async () => {
  // clear database after each test case
  await Promise.all([
    app.model.User.destroy({ truncate: true, force: true }),
    app.model.Post.destroy({ truncate: true, force: true }),
  ]);
});
