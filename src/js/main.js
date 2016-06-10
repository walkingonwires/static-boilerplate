var hbs = require('handlebars/runtime').default,
	page = require('page'),
	router = require('./router/router');

window.page = page;
router();

var labTile = require('../templates/partials/lab-tile.hbs');
hbs.registerPartial('labTile', labTile());