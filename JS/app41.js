(function(){
    var app = angular.module('store', []);
	app.controller('StoreController',function(){
	    this.products = gems;
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
		}
	]
	
	app.controller('PanelController', function(){
		this.tab = 1;
		this.setTab = function(s){
			this.tab = s;
			};
		this.isSelected = function(c){
			return this.tab == c;
			};
	
	});

	app.directive('productDesc', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-desc.html'
		};

	});

	app.directive('productDesc', function(){
		return{
			restrict: 'A',
			templateUrl: product-desc.html
		};
	});
		
})();
