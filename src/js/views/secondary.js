var $ = require('jquery'),
    PageView = require('../components/page-view'),
    secondaryTemplate = require('../../templates/views/secondary.hbs');

module.exports = function(ctx, next) {
    var secondaryModel = {
        data: 'secondary data'
    };

    var secondaryView = new PageView({
        template: secondaryTemplate,
        model: secondaryModel
    });

    $('.page-content').html(secondaryView.render());
};

