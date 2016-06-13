var template = require('../../templates/views/home.hbs'),
    content = require('../contentful/content'),
    $ = require('jquery'),
    Q = require('q');

module.exports = function (ctx, next) {

    var labs = null,
        jobs = null;

    getAll().catch(function (error) {
        console.log(error);
    }).done(function (results) {
        if (results[0].items) labs = results[0].items;
        if (results[1].items) jobs = results[1].items;

        console.log('labs:', labs);
        console.log('jobs:', jobs);

        render();
    });

    function getAll () {
        return Q.all([
            content.getLabs(),
            content.getJobs()
        ]);
    }
    
    var render = function () {
        $('.page-content').html(template({
            data: 'Home template',
            labs: labs
        }));
    };
};