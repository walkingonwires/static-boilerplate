var page = require('page');

module.exports = function () {
	window.onload = function () {
		page('/', require('../views/homepage'));
        page('/secondary', require('../views/secondary'));
        page('/tertiary', require('../views/tertiary'));
		page();
	};
};
