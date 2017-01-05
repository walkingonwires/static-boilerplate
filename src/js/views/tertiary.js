var $ = require('jquery'),
    PageView = require('../components/page-view'),
    tertiaryTemplate = require('../../templates/views/tertiary.hbs');

module.exports = function(ctx, next) {
    var tertiaryModel = {
        data: 'tertiary data'
    };

    var tertiaryView = new PageView({
        template: tertiaryTemplate,
        model: tertiaryModel
    });

    $('.page-content').html(tertiaryView.render());
};