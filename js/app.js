/* top-level module attached via ng-app */

(function () {
    var app = angular.module('wishlist', ['wishlist-products']);

    app.controller('WishlistController', ['$http', function ($http) {

        var wishlist = this;
        wishlist.products = [ ];


        $http.get('http://wishlist.diliaranasirova.com/product.php').success(function (data) {

            wishlist.products = data;
        });

    }]);

})();



/*
 app.controller('InstantSearchController', ['$scope', '$http', function($scope, $http) {
 $http.get('inc/api.php').success(function(itemData) {
 $scope.items = itemData;
 });
 }]);
 */











