var template = require('../../templates/index.hbs');

module.exports = function (){
  window.onload = function () {
    document.body.outerHTML = template({title: "An instantiated template!"});
  }
};
