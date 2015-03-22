var wishlistApp = angular.module('wishlistApp', ["restangular"]);


wishlistApp.config([
    'RestangularProvider', function (RestangularProvider) {
        RestangularProvider.setRestangularFields({
            id: "objectId"
        });
    }
]);
