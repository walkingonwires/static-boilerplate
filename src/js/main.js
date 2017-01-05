var hbs = require('handlebars/runtime').default,
	page = require('page'),
	router = require('./router/router');

hbs.registerPartial({
    'example': require('../templates/partials/example.hbs')
});

window.page = page;
router();