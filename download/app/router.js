module.exports = app => {
	app.get('/', app.controller.index.index);
	app.get('/download', app.controller.index.download)
}