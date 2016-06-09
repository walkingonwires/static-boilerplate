var $ = require('jquery'),
    template = require('../../templates/views/work.hbs');

module.exports = function (ctx, next) {
    $('.page-content').html(
        template({
            data: 'Work Template'
        })
    );
};