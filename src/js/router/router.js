var page = require('page');

module.exports = function () {
	window.onload = function () {
		page('/', require('../views/homepage'));
		page('/work', require('../views/work'));
        page('/what-we-do', require('../views/what-we-do'));
        page('/about-us', require('../views/about-us'));
        page('/careers', require('../views/careers'));
        page('/labs', require('../views/labs'));
        page('/start-a-project', require('../views/start-a-project'));
		page();
	};
};
