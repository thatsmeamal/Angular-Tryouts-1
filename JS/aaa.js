(function(){
    var app = angular.module('store', []);
	app.controller('StoreController',['$http', function($http){
		var ps = this;											//Assigns the controller to the variable ps, that is used below, so as to denote the controller.
	    ps.products = [];										//We cannot use 'this.products' here. Because 'this' here refers to the $http service, and not the controller.
	    $http.get('/aaa.json').success(function(data){
	    	ps.products = data;
	    });
	}]);
})();