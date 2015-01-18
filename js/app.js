var app = angular.module('app', ["restangular"]);

app.config([
    'RestangularProvider', function(RestangularProvider) {
        RestangularProvider.setRestangularFields({
            id: "objectId"
        });
    }
]);

app.controller('WishlistController', ["Restangular", "$scope", function(Restangular, $scope) {
    Restangular.setBaseUrl('http://wishlist.diliaranasirova.com/');
    var resources = Restangular.all('product.php');
    resources.getList().then(function(products) {
        $scope.products = products;
    });

    $scope.add = function() {
        resources.post($scope.newProduct).then(function(newResource) {
            $scope.products.push(newResource);
        });
    };

    $scope.patch = function () {
        resources.patch($scope.updateProduct).then(function(updatedProduct) {
            // some how remove updateProduct and replace with updatedProduct
        });
    };

}]);