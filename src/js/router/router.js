var page = require('page');

module.exports = function() {
	window.onload = function() {
		page('/', require('../views/homepage'));
		page();
	};
};
