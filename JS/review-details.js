(function(){
	var app = angular.module('review-details', []);

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