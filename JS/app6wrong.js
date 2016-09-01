(function(){
    var app = angular.module('store', []);
	
/*
	app.controller('StoreController',function(){
	    this.products = gems;
	});
*/

//The functionality of StoreController is defined in the directive storeAlias(see below)


	app.directive('storeWelcome', function(){
		return{
			restrict: 'E',
			templateUrl: 'store-welcome.html',
			controller: function(){
				this.products = gems;
			},
			controllerAs: 'store'
		};
	});


	var gems =[ 
		{
			name: 'Docahedron',
			price: 2.95,
			description: 'AngularJS (commonly referred to as "Angular" or "Angular.js") is a complete JavaScript-based open-source client and server-side web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.',
			specs: 'Nothing yet',
			img: 'Pics/Apple-50.png',
			reviews:[
				{
					stars: 5,
					body: "Great product",
					author: 'asd@gmail.com'
				},
				{
					stars: 3,
					body: "Innovative product",
					author: "qwe@gmail.com"
				}
			]
		},
		{
			name: 'Yetahedron',
			price: 6.95,
			description: 'AngularJS (commonly referred to as "Angular" or "Angular.js") is a complete JavaScript-based open-source client and server-side web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.',
			specs: 'Nothing yet',
			img: 'Pics/Broccoli-50.png',
			reviews:[
				{
					stars: 3,
					body: "Great idea",
					author: 'asd@gmail.com'
				},
				{
					stars: 4,
					body: "Awesome product",
					author: "qwe@gmail.com"
				}
			]
		}
	]
	
/*	app.controller('PanelController', function(){
		this.tab = 1;
		this.setTab = function(s){
			this.tab = s;
			};
		this.isSelected = function(c){
			return this.tab == c;
			};
	
	});
*/

//The functioning of PanelController is defined inside the directive and an alias is given for the controller

	app.directive('productDescsWrong', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-descs-wrong.html',
			controller: function(){
				this.ta = 1;
				this.setTab = function(s){
					this.ta = s;
				};
				this.isSelected = function(c){
					return this.ta === c;
				};
			},
			controllerAs: 'pane'
		};
	});



/*
	app.controller('ReviewController', function(){
		this.revs = {};								//We cannot use any variable here. It has to be the same as the one we used for iterating reviews in the html page.
		this.submitReview = function(produ){		//Here, argument name can be anything, since it only act as a placeholder for the actual argument passed from the html page.
			produ.reviews.push(this.revs);
			this.revs.createdOn = Date.now();
			this.revs= {};							//The variable 'revs' was used for iteration of reviews. Hence it has to be used here for the code to work.
		};
	});
*/
	
	app.directive('reviewAlias', function(){
		return{
			restrict: 'E',
			templateUrl: 'review-alias.html',
			controller: function(){
				this.revs = {};								//We cannot use any variable here. It has to be the same as the one we used for iterating reviews in the html page.
				this.submitReview = function(produ){		//Here, argument name can be anything, since it only act as a placeholder for the actual argument passed from the html page.
					produ.reviews.push(this.revs);
					this.revs.createdOn = Date.now();
					this.revs= {};
				}
			},
			controllerAs: 'reviewCtrl'
		};
	});
		
})();
