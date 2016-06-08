var $ = require('jquery'),
    template = require('../../templates/pages/start-a-project.hbs');

module.exports = function (ctx, next) {
    $('.page-content').html(
        template({
            data: 'Start A Project Template'
        })
    );
};