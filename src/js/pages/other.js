var template = require('../../templates/other.hbs'),
	content = require('../contentful/content');

module.exports = function() {
	window.onload = function() {
		document.body.outerHTML = template({
			data: "An instantiated template!"
		});
	}
};
