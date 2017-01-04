var $ = require('jquery'),
    template = require('../../templates/views/tertiary.hbs');

module.exports = function(ctx, next) {
    $('.page-content').html(template({
        data: 'tertiary page data'
    }));
};
