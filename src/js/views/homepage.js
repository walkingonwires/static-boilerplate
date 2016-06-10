var template = require('../../templates/views/home.hbs'),
    content = require('../contentful/content'),
    $ = require('jquery');

module.exports = function (ctx, next) {
    content.getLabs().done(function (results) {
        if (results.items) console.log('getLabs:', results.items);
    });

    content.getJobs().done(function (results) {
        if (results.items) console.log('getJobs:', results.items);
    });

    $('.page-content').html(
        template({
            data: 'Home template'
        })
    );
};
