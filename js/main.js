
var garethPortfolio = angular.module('garethPortfolio', ['ngRoute','ngAnimate','garethPortfolioControllers','ngSanitize']);


garethPortfolio.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/homepage.html',
        controller: 'portfolioItems'
      }).
        when('/contact', {
        templateUrl: '/contact.html',
        controller: 'contactForm'
      }).
      when('/:workID', {
        templateUrl: '/work.html',
        controller: 'portfolioItems'
      }).
      otherwise({
        redirectTo: '/'
      });
      
      $locationProvider.html5Mode(true);
      
  }]);

    //directive to initiate Lightbox
    garethPortfolio.directive('lightBox', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                $(element).fancybox();
            }
        };
    }); 
  
  //Service to get JSON data
  garethPortfolio.factory('dataService', function($rootScope, $http, $q) {

		var portfolios, allJSON;
		var serviceObj = {};
	  		
		//HTTP Request for new JSON
		serviceObj.requestPortfolioData = function(){
			return $http.get('js/data.json').success(function(data){
				allJSON = data;
			});
		}
			
		//Return the JSON for Portfolio items
		serviceObj.getPortfolioItems = function(){
			
			var deferred = $q.defer();
			
			//Return it if its already been stored or request new JSON
			if(portfolios){
				deferred.resolve(portfolios);
				return deferred.promise;
			}else{
				return serviceObj.requestPortfolioData().then(function(result){
					portfolios = result.data.portfolio.Items;
					deferred.resolve(portfolios);
					return deferred.promise;
				});
			}
		}
		
		return serviceObj;
		
 });