
module.exports = ["$scope", "$routeParams", "$location", "hostList", function($scope, $routeParams, $location, hostList) {
	var updateScope = function() {
		var hostData = hostList.find($routeParams.host);

		if(!hostData) {
			return $location.path("/");
		}

		$scope.hostData = hostData;
	};
	updateScope();

	hostList.on("update", function(hostName) {
		// only update scope if the update was for our host
		if(hostName == $routeParams.host) {
			updateScope();
		}
	});
}];
