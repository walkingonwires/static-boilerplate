var page = require('page');

module.exports = function() {
	page('/', require('../pages/homepage'));
	page('/other', function() {
		console.log(require('../pages/other'));
		require('../pages/other')
	});
};
