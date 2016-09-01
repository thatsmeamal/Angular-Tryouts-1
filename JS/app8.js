/*
An array of products are declared in JSON format in the file products.json.

In a .json file, if it contains an array, there is no need to specify any name for the array. 

The file should only contain data denoted as name-value pairs (both enclosed in double quotes). 
*/

/*
Here, the data in .json file is retrieved using an http.get service.

To use this method in a controller, we need to inject the service into the controller.

This is done by mentioning the service inside the array argument of app.controller method.

We also pass the http service as argument to the function following it.

This is called as DEPENDENCY INJECTION.
*/

/*
If the controller needs to use more than one service, all of them should be mentioned as an array element as well as
passed as function arguments:

app.controller('StoreController',['$http', '$log', function($http, $log){
	
	}]);

When we retrieve the JSON data using $http, the result will automatically be decoded into JavaScript arrays and objects.

*/


(function(){
    var app = angular.module('store', []);
	app.controller('StoreController',['$http', function($http){
		var ps = this;											//Assigns the controller to the variable ps, that is used below, so as to denote the controller.
	    ps.products = [];										//We cannot use 'this.products' here. Because 'this' here refers to the $http service, and not the controller.
	    $http.get('/products.json').success(function(c){
	    	ps.products = c;
	    });
	}]);


/*
Another style of writing the $http service:

	$http({method:'GET', url:'/products.json'}).success(function(gems){
	    	ps.products = gems;
	    });
*/	


	app.controller('PanelController', function(){
		this.ta = 1;
		this.setTab = function(s){
			this.ta = s;
			};
		this.isSelected = function(c){
			return this.ta === c;
			};
	
	});

	app.controller('ReviewController', function(){
		this.revs = {};								//We cannot use any variable here. It has to be the same as the one we used for iterating reviews in the html page.
		this.submitReview = function(produ){		//Here, argument name can be anything, since it only act as a placeholder for the actual argument passed from the html page.
			produ.reviews.push(this.revs);
			this.revs.createdOn = Date.now();
			this.revs = {};							//The variable 'revs' was used for iteration of reviews. Hence it has to be used here for the code to work.
		};
	});



/*	app.controller('ReviewController', function(){   //This controller will not work properly.
		this.productReview = {};					//Because, the iterator alias used as reviews-iterator is not 'productReview'.			
		this.submitReview = function(produ){		
			produ.reviews.push(this.productReview);
			this.productReview= {};							
		};
	});
*/
	
	
	
})();
