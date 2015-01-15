/* all the functionality for products */

(function () {
    angular.module('wishlist-products', [])

        .directive('productDescription', function () {

            return {
                restrict: 'E',
                templateUrl: 'partials/product-description.html'
            };
        })

        .directive('productTitle', function () {

            return {
                restrict: 'E',
                templateUrl: 'partials/product-title.html'
            };

        })

        .directive('productLink', function () {

            return {
                restrict: 'E',
                templateUrl: 'partials/product-link.html'
            };

        })

        .directive('productPrice', function () {

            return {
                restrict: 'E',
                templateUrl: 'partials/product-price.html'
            };

        })

        .directive('productPicture', function () {

            return {
                restrict: 'E',
                templateUrl: 'partials/product-picture.html'
            };

        })

        .directive('productCheckBtn', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/product-check-btn.html'
            };

        })

        .directive('addForm', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/add-form.html',

                controller: function () {
                    this.product = {};

                    this.addProduct = function (form) {

                        /*
                         form.$setPristine();
                         products.push(this.product);
                         this.product = {};
                         */
                    }
                },

                controllerAs: 'addFormCtrl',
                scope: {
                    products: '='
                }
            };

        });


})
    ();

/*
 Example:
 var shoes = [
 {
 name: "Cadani",
 brand: "Aldo",
 style: "Tall Boots",
 color: "Black",
 price: 110.00,
 description: "These super trendy boots will have you dancing all over town...",
 link: "http://www.aldoshoes.com/ca/en/women/boots/tall-boots/c/133/CADANI/p/33598088-96",
 image: 'http://media.aldoshoes.com/product/CADANI/96/CADANI_96_RG_324.JPG',
 acquired: false
 }
 ];
 */