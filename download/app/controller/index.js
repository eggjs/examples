var path = require('path');
var fs = require('fs');

module.exports = app => {
	class IndexController extends app.Controller {
		* index() {
			this.ctx.body = '<a download href="/download">download</a>'
		}

		* download(ctx) {
			const filePath = path.resolve(__dirname, '..', 'public/egg.svg');
			const buf = fs.readFileSync(filePath, 'utf-8');
			ctx.attachment('egg.svg');
			ctx.set('Content-Type', 'application/octet-stream');
			ctx.body = buf;
		}
	}

	return IndexController
};
