(function () {
    var app = angular.module('mainApp', ['ngRoute', 'config', 'ngScrollbars', 'services']);
    app.controller('mainCtrl', ['$scope', 'restful', function ($scope, restful) {
        /*Custom Scrollbar Config*/
        $scope.config = {
            autoHideScrollbar: true,
            theme: 'minimal',
            advanced: {
                updateOnContentResize: true
            },
            scrollInertia: 0,
            axis: 'y'
        };

    }]);


}());