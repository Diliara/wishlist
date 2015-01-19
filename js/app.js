var app = angular.module('app', ["restangular"]);

app.config([
    'RestangularProvider', function (RestangularProvider) {
        RestangularProvider.setRestangularFields({
            id: "objectId"
        });
    }
]);

app.controller('WishlistController', ["Restangular", "$scope", function (Restangular, $scope) {
    Restangular.setBaseUrl('http://wishlist.diliaranasirova.com/');
    var resources = Restangular.all('product.php');
    resources.getList().then(function (products) {
        $scope.products = products;
    });

    $scope.add = function () {

        console.log("form is $pristine: " + $scope.addProductForm.$pristine);

        if ($scope.addProductForm.$pristine == false) {
            resources.post($scope.newProduct).then(function (newResource) {
                $scope.products.push(newResource);

            });
            $scope.addProductForm.$setPristine();
            $scope.newProduct = {};
        }


        /*
         console.log("addProductForm: \n");
         console.dir($scope.addProductForm);
         */


    };

    $scope.patch = function () {
        resources.patch($scope.updateProduct).then(function (updatedProduct) {
            // some how remove updateProduct and replace with updatedProduct
        });
    };

}]);