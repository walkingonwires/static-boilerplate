var Q = require('q'),
	contentful = require('contentful');

var client = contentful.createClient({
	space: 'tx14fhbllfqh',
	accessToken: '3da39a18d0237d5ba7b6b630983175f7b86c757dde8a7473187fe8c1cf5e3327', // <-- preview token
	host: 'preview.contentful.com' // remove the host param completely to default back to prod
});

module.exports = {
	getLabs: function (resultLimit) {
		var limits = resultLimit ? resultLimit : 1000,
			deferred = Q.defer();

		client.getEntries({
			limit: limits,
			'content_type': 'labTile'
		}).then(function (results) {
			return deferred.resolve(results);
		}, function (e) {
			return deferred.reject(e);
		});
		
		return deferred.promise;
	},

	getJobs: function (resultLimit) {
		var limits = resultLimit ? resultLimit : 1000,
			deferred = Q.defer();

		client.getEntries({
			limit: limits,
			'content_type': 'jobPost'
		}).then(function (results) {
			return deferred.resolve(results);
		}, function (e) {
			return deferred.reject(e);
		});

		return deferred.promise;
	}
};
