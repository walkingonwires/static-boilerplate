var page = require('page');

module.exports = function () {
	window.onload = function () {
		page('/', require('../pages/homepage'));
		page('/work', require('../pages/work'));
        page('/what-we-do', require('../pages/what-we-do'));
        page('/about-us', require('../pages/about-us'));
        page('/careers', require('../pages/careers'));
        page('/labs', require('../pages/labs'));
        page('/start-a-project', require('../pages/start-a-project'));
		page();
	};
};
