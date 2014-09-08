angular.module('Dashboard')
	.controller('FarmReportCtrl', ['$scope', function ($scope) {

		var i, j;
		var numberOfHistoricBuilds;
		var time;

		$scope.servers = [
			{ name: 'local', projects: [
				{name: 'My Primary Project', success: true },
				{name: 'My Secondary Project', success: true},
				{name: 'My Tertiary Project', success: false},
				{name: 'My Quaternary Project', success: true},
				{name: 'My Quinary Project', success: true},
				{name: 'My Senary Project', success: false},
				{name: 'My Septenary Project', success: true},
				{name: 'My Octonary Project', success: true}
			]}
		];

		// Hackily create some fake history for our projects:

		for (i = 0; i < $scope.servers[0].projects.length; i++) {
			$scope.servers[0].projects[i].history = [];
			numberOfHistoricBuilds = Math.floor(Math.random() * 10) % 10;
			for (j = 0; j < numberOfHistoricBuilds; j++) {
				time = Math.floor(Math.random()*30)/30;
				$scope.servers[0].projects[i].history.push({
					time: time,
					date: new Date(new Date().getTime() - (1 - time) * 10000000000).toLocaleString(),
					success: Math.random() > 0.5
				});
			}
		}
	}]);