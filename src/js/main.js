var hbs = require('handlebars/runtime').default,
    layouts = require('handlebars-layouts'),
    page = require('page');

hbs.registerHelper(layouts(hbs));
hbs.registerPartial('layout', require('../templates/layout.hbs'));

var homePage = require('./pages/homepage');
homePage();

console.log('main script runs or blah');
