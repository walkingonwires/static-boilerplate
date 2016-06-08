var $ = require('jquery'),
    template = require('../../templates/pages/what-we-do.hbs');

module.exports = function (ctx, next) {
    $('.page-content').html(
        template({
            data: 'What We Do Template'
        })
    );
};