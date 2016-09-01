(function(){
	var app = angular.module('Products', []);

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

	app.directive('reviewAlias', function(){
		return{
			restrict: 'E',
			templateUrl: 'review-alias.html',
			controller: function(){
				this.revs = {};								
				this.submitReview = function(produ){		
					produ.reviews.push(this.revs);
					this.revs.createdOn = Date.now();
					this.revs= {};
				}
			},
			controllerAs: 'reviewCtrl'
		};
	});


})();