'use strict';

exports.keys = 'my secret keys';

exports.view = {
  defaultViewEngine: 'nunjucks',
};
exports.nunjucks = {
  // dir: 'path/to/template/dir',  // default to `{app_root}/app/view`
  cache: true, // local env is false
};
