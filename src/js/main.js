var hbs = require('handlebars/runtime').default,
	page = require('page'),
	router = require('./router/router');

window.page = page;
router();
