var $ = require('jquery'),
    template = require('../../templates/views/about-us.hbs');

module.exports = function (ctx, next) {
    $('.page-content').html(
        template({
            data: 'About Us Template'
        })
    );
};