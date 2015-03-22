wishlistApp.controller('WishlistController', ["Restangular", "$scope", function (Restangular, $scope) {
    Restangular.setBaseUrl('http://wishlist.diliaranasirova.com/');
    var resources = Restangular.all('product.php');
    resources.getList().then(function (products) {
        $scope.products = products;
        $scope.productOrder = 'price';
    });

    //PUSH
    $scope.add = function () {
        //console.log("form is $pristine: " + $scope.addProductForm.$pristine);
        if ($scope.addProductForm.$pristine == false) {
            resources.post($scope.newProduct).then(function (newResource) {
                $scope.products.push(newResource);
            });
            $scope.addProductForm.$setPristine();
            $scope.newProduct = {};

        }
    };

    //PATCH
    $scope.toggleEditor = function (parseid) {
        var productNode = document.getElementById(parseid);
        var childNodes = productNode.children;


        $(childNodes).each(function () {
            $(this).toggle();
        });

        /*
         for(var i = 0; i < childNodes.length; i++) {
         $(childNodes[i]).toggle();
         }
         */
    };

    $scope.patch = function (parseid) {
        $scope.products.forEach(function (product) {
            if (parseid == product.objectId) {
                resources.patch(product).then($scope.toggleEditor(parseid));
            }
        });
    };

    //DELETE
    $scope.deleteObject = function (productName, parseid) {
        if (window.confirm("Are you sure you wanna delete " + productName + "?")) {
            $scope.products.forEach(function (product) {
                if (parseid == product.objectId) {
                    product.remove().then(function () {
                        resources.getList().then(function (products) {
                            $scope.products = products;
                        });
                    });
                }
            });
        }
    }

    //Do Nothing
    $scope.cancelEdit = function () {
        resources.getList().then(function (products) {
            $scope.products = products;
        });
    }
}]);




