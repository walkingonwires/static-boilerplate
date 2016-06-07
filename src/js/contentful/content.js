var Q = require('q'),
	contentful = require('contentful');

var client = contentful.createClient({
	space: 'tx14fhbllfqh',
	accessToken: '3da39a18d0237d5ba7b6b630983175f7b86c757dde8a7473187fe8c1cf5e3327', // <-- preview token
	host: 'preview.contentful.com' // remove the host param completely to default back to prod
});

module.exports = {
	getHomepage: function() {
		var deferred = Q.defer();
		client.getEntry('5XOj374iDm8WYmgmWOoosk')
			.then(function(results) {
				return deferred.resolve(results);
			}, function(e) {
				return deeferred.reject(e);
			})

		return deferred.promise;
	}
};
