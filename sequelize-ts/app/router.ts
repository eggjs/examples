'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  app.resources('users', '/users', app.controller.user);
  app.resources('posts', '/posts', app.controller.post);
}
