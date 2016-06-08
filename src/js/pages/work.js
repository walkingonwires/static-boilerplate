var $ = require('jquery'),
    template = require('../../templates/pages/work.hbs');

module.exports = function (ctx, next) {
    $('.page-content').html(
        template({
            data: 'Work Template'
        })
    );
};