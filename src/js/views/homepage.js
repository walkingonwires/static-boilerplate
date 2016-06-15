var template = require('../../templates/views/home.hbs'),
	$ = require('jquery');

module.exports = function(ctx, next) {
	$('.page-content').html(template({}));
};
