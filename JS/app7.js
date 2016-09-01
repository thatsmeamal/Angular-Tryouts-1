(function(){
    var app = angular.module('store', ['product-details','review-details']);


   /*
   	Here, the modeule stor depends on the other two modules product-details and review-details.
   	Hence they are to be included as dependecies when defining the store module.
   */

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


})();
