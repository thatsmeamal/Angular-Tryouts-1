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
			revs: 'None',
			img: 'Pics/Apple-50.png'
		},
		{
			name: 'Yetahedron',
			price: 5.95,
			description: 'The AngularJS framework works by first reading the HTML page, which has embedded into it additional custom tag attributes.',
			specs: 'Nothing yet',
			revs: 'None',
			img: 'Pics/Avocado-50.png'
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
	
	
	
})();
