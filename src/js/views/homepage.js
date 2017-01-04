var $ = require('jquery'),
    template = require('../../templates/views/home.hbs');

module.exports = function(ctx, next) {
	$('.page-content').html(template({
        data: 'home page data'
    }));
};
