var template = require('../../templates/home.hbs'),
    content = require('../contentful/content');

module.exports = function (ctx, next) {
    content.getHomepage().done(function (results) {
        console.log(results);
    });

    document.body.innerHTML = template({
        data: "An instantiated template!"
    });

    next();
};
