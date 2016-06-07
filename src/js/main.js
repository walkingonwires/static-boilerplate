var hbs = require('handlebars/runtime').default,
	layouts = require('handlebars-layouts'),
	Router = require('director');

hbs.registerHelper(layouts(hbs));
hbs.registerPartial('layout', require('../templates/layout.hbs'));

var routes = {
	'/': require('./pages/homepage'),
	'/other': require('./pages/other')
};

var router = Router(routes);

router.init();
