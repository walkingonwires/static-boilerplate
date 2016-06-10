var template = require('../../templates/views/home.hbs'),
    content = require('../contentful/content'),
    $ = require('jquery');

module.exports = function (ctx, next) {

    var labs = null,
        jobs = null;

    content.getLabs().done(function (results) {
        if (results.items) labs = results.items;
        render();
    });

    var render = function () {
        $('.page-content').html(template({
            data: 'Home template',
            labs: labs
        }));
    };
};
