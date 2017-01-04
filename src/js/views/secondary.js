var $ = require('jquery'),
    template = require('../../templates/views/secondary.hbs');

module.exports = function(ctx, next) {
    $('.page-content').html(template({
        data: 'secondary page data'
    }));
};
