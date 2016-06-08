var $ = require('jquery'),
    template = require('../../templates/pages/careers.hbs');

module.exports = function (ctx, next) {
    $('.page-content').html(
        template({
            data: 'Careers Template'
        })
    );
};