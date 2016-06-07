var template = require('../../templates/other.hbs');

module.exports = function (ctx, next) {
    document.body.innerHTML = template({
        data: "An instantiated template!"
    });
};
