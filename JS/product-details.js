(function(){
	var app = angular.module('product-details', []);

	app.directive('productDescs', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-descs.html',
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

})();