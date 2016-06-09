var template = require('../../templates/views/home.hbs'),
    content = require('../contentful/content'),
    $ = require('jquery');

module.exports = function (ctx, next) {
    content.getHomepage().done(function (results) {
        console.log(results);
    });

    $('.page-content').html(
        template({
            data: 'Home template'
        })
    );
};
