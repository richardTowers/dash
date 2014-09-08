angular.module('Dashboard')
    .controller('MasterCtrl', ['$scope', '$window', '$rootScope', function ($scope, $window, $rootScope) {

    var mobileWidth = 992;

    function determineSidebar () {
        $scope.showSidebar = window.innerWidth >= mobileWidth;
        $rootScope.$broadcast('sidebarToggle');
    }
    determineSidebar();

    $window.onresize = function() {
        $scope.$apply(determineSidebar);
    };

    $scope.toggleSidebar = function() {
        $scope.showSidebar = ! $scope.showSidebar;

        // Todo: ideally we'd broadcast this event when
        // the sidebar is finished sliding, but I'm not sure
        // how to do that.
        $rootScope.$broadcast('sidebarToggle');
    };

    $scope.servers = ['local'];
}]);

