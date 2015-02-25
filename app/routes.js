module.exports = function(app, admin, blips, utils) {

	// API routes ===============================================================
	
	app.get('/api/blips', blips.getBlips);


	// normal routes ===============================================================
	
	app.get('/admin', function(req, res) {
		
		res.send('A Aron');

		// res.render('admin/index.html', {
		// 	title : 'CMS - Admin'
		// });
	});
	

};