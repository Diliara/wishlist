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



 app.controller('WishlistController', ['$scope', '$http', function ($scope, $http) {

 $http.get('wishlist.diliaranasirova.com/product.php').success(function (data) {

 $scope.products = data;
 });

 }]);

 */

/*
 app.controller('InstantSearchController', ['$scope', '$http', function($scope, $http) {
 $http.get('inc/api.php').success(function(itemData) {
 $scope.items = itemData;
 });
 }]);
 */

/*
 this.products = shoes;
 var shoes = [
 {
 name: "New Simple Pump",
 brand: "Louboutin",
 color: "Noir",
 price: 795.00,
 description: "'New Simple Pump' is a gorgeous rendition of Monsieur Louboutin's famed 'Simple Pump.' Her narrow, exposed platform gives this classic style a contemporary twist. This 120mm version in smooth black patent leather will quickly become your favorite everyday pump.",
 link: "http://us.christianlouboutin.com/ca_en/shop/women/new-simple-pump-34925.html",
 image: 'http://images.us.christianlouboutin.com/media/catalog/product/cache/2/zoom2_image_240x240/160x/9df78eab33525d08d6e5fb8d27136e95/c/h/christianlouboutin-newsimplepump-3080746_bk01_1_240x240.jpg',
 acquired: false

 },
 {
 name: "Bianca",
 brand: "Louboutin",
 color: "Nude",
 price: 875.00,
 description: "'Bianca' has it all. Her sleek silhouette made up of a sensible platform, 140mm stiletto heel, and shallow round toe strike the perfect balance between sexy and sophisticated. A favorite among many in nude patent leather, 'Bianca' transitions seamlessly from day to evening.",
 link: "http://us.christianlouboutin.com/ca_en/shop/women/bianca-2.html",
 image: 'http://images.us.christianlouboutin.com/media/catalog/product/cache/2/zoom2_image_240x240/160x/9df78eab33525d08d6e5fb8d27136e95/c/h/christianlouboutin-bianca-1100024_PK20_1_240x240_2.jpg',
 acquired: false

 },
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









