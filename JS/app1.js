(function(){
    var app = angular.module('store', []);
	app.controller('StoreController',function(){
	    this.products = gems;
	});
	var gems = [
		{
			name: 'Docahedron',
			price: 2.95,
			canBuy: true,
			soldOut: false,
			img: 'Pics/Apple-50.png'
		},
		{
			name: 'Yetahedron',
			price: 5.95,
			canBuy: true,
			soldOut: false,
			img: 'Pics/Avocado-50.png'
		},
		{
			name: 'Betahedron',
			price: 1.95,
			canBuy: true,
			soldOut: false,
			img: 'Pics/Beer-50.png'
		},
		{
			name: 'Hexahedron',
			price: 2,
			canBuy: true,
			soldOut: false,
			img: 'Pics/Broccoli-50.png'
		},
		{
			name: 'Zetahedron',
			price: 6,
			canBuy: true,
			soldOut: false,
			img: 'Pics/Charcoal-50.png'
		}
	]
})();
