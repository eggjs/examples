var path = require('path');
var fs = require('fs');

module.exports = app => {
	class IndexController extends app.Controller {
		* index() {
			this.ctx.body = '<a href="/download">download</a>'
		}

		* download(ctx) {
			const filePath = path.resolve(__dirname, '..', 'public/egg.svg');
			const buf = fs.readFileSync(filePath, 'utf-8');
			ctx.set('Content-Type', 'application/octet-stream');
			ctx.set('Content-Disposition', 'attachment; filename=egg.svg')
			ctx.body = buf;
		}
	}

	return IndexController
};
