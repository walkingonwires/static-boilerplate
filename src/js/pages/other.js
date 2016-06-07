var template = require('../../templates/pages/other.hbs');

module.exports = function (ctx, next) {
    document.body.innerHTML = template({
        data: "An instantiated template!"
    });
};
