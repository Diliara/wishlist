/* all the functionality for products */

(function () {
    var app = angular.module('wishlist-products', [])


    app.directive('productDescription', function () {

        return {
            restrict: 'E',
            templateUrl: 'partials/product-description.html'
        };
    });
    app.directive('productTitle', function () {

        return {
            restrict: 'E',
            templateUrl: 'partials/product-title.html'
        };

    });
    app.directive('productLink', function () {

        return {
            restrict: 'E',
            templateUrl: 'partials/product-link.html'
        };

    });
    app.directive('productPrice', function () {

        return {
            restrict: 'E',
            templateUrl: 'partials/product-price.html'
        };

    });
    app.directive('productPicture', function () {

        return {
            restrict: 'E',
            templateUrl: 'partials/product-picture.html'
        };

    });
    app.directive('productCheckBtn', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product-check-btn.html'
        };

    });


})();

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