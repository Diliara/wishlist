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
        templateUrl: 'partials/search-form.html',
        controller: function(){
            this.showSearchForm = false;
        },
        controllerAs: 'searchFormController'
    };

});

wishlistApp.directive('navBar', function () {

    return {
        restrict: 'E',
        templateUrl: 'partials/nav-bar.html'
    };

});
