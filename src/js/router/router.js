var page = require('page');

module.exports = function () {
	window.onload = function () {
		page('/', require('../pages/homepage'));
		page('/other', require('../pages/other'));
		page();
	};
};
