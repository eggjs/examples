module.exports = app => {
	app.get('/', 'index.index');
	app.get('/download', 'index.download')
}