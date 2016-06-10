var Q = require('q'),
	contentful = require('contentful');

var client = contentful.createClient({
	space: 'tx14fhbllfqh',
	accessToken: '3da39a18d0237d5ba7b6b630983175f7b86c757dde8a7473187fe8c1cf5e3327', // <-- preview token
	host: 'preview.contentful.com' // remove the host param completely to default back to prod
});

module.exports = {
	getLabs: function () {
		var deferred = Q.defer();
		client.getEntries({
			'content_type': 'labTile'
		}).then(function (results) {
			return deferred.resolve(results);
		}, function (e) {
			return deferred.reject(e);
		});
		return deferred.promise;
	},

	getJobs: function () {
		var deferred = Q.defer();
		client.getEntries({
			'content_type': 'jobPost'
		}).then(function (results) {
			return deferred.resolve(results);
		}, function (e) {
			return deferred.reject(e);
		});
		return deferred.promise;
	}
};
