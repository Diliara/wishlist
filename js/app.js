var wishlistApp = angular.module('wishlistApp', ['ngRoute', 'wishlistControllers']);


wishlistApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'ListController'
    }).otherwise({
        redirectTo: '/main'
    })
}]);


wishlistApp.directive('addForm', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/add-form.html',
        controller: function(){
            this.showForm = false;
        },
        controllerAs: 'addFormController'

    };

});

wishlistApp.directive('searchForm', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/search-form.html'
    };

});

wishlistApp.directive('navBar', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/nav-bar.html'
    };

});
