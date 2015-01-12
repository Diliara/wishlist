/* all the functionality for products */

(function () {
    var app = angular.module('wishlist-products', [])


    app.directive('productDescription', function () {

        return {
            restrict: 'E',
            templateUrl: 'includes/product-description.html'
        };
    });
    app.directive('productTitle', function () {

        return {
            restrict: 'E',
            templateUrl: 'includes/product-title.html'
        };

    });
    app.directive('productLink', function () {

        return {
            restrict: 'E',
            templateUrl: 'includes/product-link.html'
        };

    });
    app.directive('productPrice', function () {

        return {
            restrict: 'E',
            templateUrl: 'includes/product-price.html'
        };

    });
    app.directive('productPicture', function () {

        return {
            restrict: 'E',
            templateUrl: 'includes/product-picture.html'
        };

    });
    app.directive('productCheckBtn', function () {
        return {
            restrict: 'E',
            templateUrl: 'includes/product-check-btn.html'
        };

    });


})();