
/* wishlistApp module */
var wishlistApp = angular.module('wishlistApp', ["restangular"]);


/* Route */
wishlistApp.config([
    'RestangularProvider', function (RestangularProvider) {
        RestangularProvider.setRestangularFields({
            id: "objectId"
        });
    }
]);
