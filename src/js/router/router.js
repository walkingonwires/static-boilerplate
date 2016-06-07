var page = require('page');

module.exports = function() {
	var homepage = require('../pages/homepage'),
		other = require('../pages/other');

	page('/', homepage());
	page('/other', other());
};
