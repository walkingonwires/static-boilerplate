var $ = require('jquery'),
    template = require('../../templates/views/careers.hbs');

module.exports = function (ctx, next) {
    $('.page-content').html(
        template({
            data: 'Careers Template'
        })
    );
};