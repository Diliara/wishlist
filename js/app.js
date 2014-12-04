
(function() {
    var app = angular.module('store', []);

    /* Controller - where we define our app's behaviour by defining functions and values */
    app.controller('StoreController', function(){
        /* product is a property of our controller */
        this.product = gem;


    });

    var gem = {
        name: "Some gem",
        price: 100.99,
        description: "some gem example"
    }


})();



