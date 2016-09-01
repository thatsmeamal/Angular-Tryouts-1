(function(){
    var app = angular.module('store', []);
	app.controller('StoreController',function(){
	    this.product = gem1;
		this.product1 = gem2;
	});
	var gem1 = {
		name: 'Docahedron',
		price: 2.95,
	}
	var gem2 = {
		name: 'Yetahedron',
		price: 5.95,
	}
})();
