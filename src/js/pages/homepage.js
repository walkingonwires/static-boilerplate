var template = require('../../templates/index.hbs');


window.onload = function() {
    document.body.outerHTML = template({title: "An instantiated template!"});
};
