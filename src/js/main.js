var hbs = require('handlebars/runtime').default,
    layouts = require('handlebars-layouts'),
    page = require('page');

hbs.registerHelper(layouts(hbs));
hbs.registerPartial('layout', require('../templates/layout.hbs'));

var honmePage = require('./pages/homepage');