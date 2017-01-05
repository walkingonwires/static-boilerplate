var $ = require('jquery'),
    PageView = require('../components/page-view'),
    homepageTemplate = require('../../templates/views/home.hbs');

module.exports = function(ctx, next) {
    var homepageModel = {
        data: 'homepage data'
    };

    var homepageView = new PageView({
        template: homepageTemplate,
        model: homepageModel
    });

    $('.page-content').html(homepageView.render());
};
