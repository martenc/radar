module.exports = function(app, admin, blips, utils) {
// normal routes ===============================================================
	
	// app.get('/', index.render);


	//ADMIN///////////////////////////////////////////////////////////////////////
	app.get('/admin', function(req, res) {
		
		res.send('A Aron');

		// res.render('admin/index.html', {
		// 	title : 'CMS - Admin'
		// });
	});
	

};