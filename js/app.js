(function () {
    var app = angular.module('list', []);

    /* Controller - where we define our app's behaviour by defining functions and values */
    app.controller('StoreController', function () {
        /* product is a property of our controller */
        this.products = shoes;


    });

    var shoes = [


        {
            name: "New Simple Pump",
            brand: "Louboutin",
            color: "Noir",
            price: 795.00,
            description: "'New Simple Pump' is a gorgeous rendition of Monsieur Louboutin's famed 'Simple Pump.' Her narrow, exposed platform gives this classic style a contemporary twist. This 120mm version in smooth black patent leather will quickly become your favorite everyday pump.",
            link: "http://us.christianlouboutin.com/ca_en/shop/women/new-simple-pump-34925.html",
            image: 'http://images.us.christianlouboutin.com/media/catalog/product/cache/2/zoom2_image_240x240/160x/9df78eab33525d08d6e5fb8d27136e95/c/h/christianlouboutin-newsimplepump-3080746_bk01_1_240x240.jpg'
        },

        {
            name: "Bianca",
            brand: "Louboutin",
            color: "Nude",
            price: 875.00,
            description: "'Bianca' has it all. Her sleek silhouette made up of a sensible platform, 140mm stiletto heel, and shallow round toe strike the perfect balance between sexy and sophisticated. A favorite among many in nude patent leather, 'Bianca' transitions seamlessly from day to evening.",
            link: "http://us.christianlouboutin.com/ca_en/shop/women/bianca-2.html",
            image: 'http://images.us.christianlouboutin.com/media/catalog/product/cache/2/zoom2_image_240x240/160x/9df78eab33525d08d6e5fb8d27136e95/c/h/christianlouboutin-bianca-1100024_PK20_1_240x240_2.jpg'
        }


    ];


})();






