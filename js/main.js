
var garethPortfolio = angular.module('garethPortfolio',['ngRoute','ngAnimate','garethPortfolioControllers','ngSanitize','ngDialog']);


garethPortfolio.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/homepage.html',
        controller: 'portfolioItems'
      }).
      when('/my_work?scrollTo=my_work', {
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
      $locationProvider.hashPrefix('!');
      
  }]);

    garethPortfolio.run(function ($rootScope, $location, $anchorScroll, $routeParams) {

        var counterStatus = 'off';
    
        $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
            $location.hash($routeParams.scrollTo);
            $anchorScroll();
        });

        var socket = io.connect('http://garethferguson.co.uk');
        socket.on('connect', function () {
            
            socket.send('here');
            
            var count;

            socket.on('count', function (msg) {
                
                if(msg.count > 1){
                    count = '<strong>' + msg.count + '</strong> current viewers'; 
                }else{
                    count = '<strong>' + msg.count + '</strong> current viewer';   
                }
                
                $('#counter').html(count);
                
                if(counterStatus == 'off'){
                    counterStatus ='on';
                    $('#counter').addClass('visible');
                }
                
            });

        });

    });

    //directive to show menu on scroll
    garethPortfolio.directive("scroll",function ($window,$animate) {
        return {
            link: function(scope, element, attrs) {
                
                var windowElement = angular.element($window),
                    headerDiv = document.querySelector("#header");
                
                windowElement.bind('scroll', function(){
                    if(this.pageYOffset > headerDiv.offsetHeight){
                        if(!element.hasClass('revealHeader')){
                            element.addClass('revealHeader');
                        }
                    }else{
                        element.removeClass('revealHeader');
                    }
                });
            }
        };
    });
  
  //Service to get JSON data
  garethPortfolio.factory("dataService", function($rootScope, $http, $q) {

		var portfolios, allJSON;
		var serviceObj = {};
	  		
		//HTTP Request for new JSON
		serviceObj.requestPortfolioData = function(){
			return $http.get('/js/data.min.json').success(function(data){
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


    //service to send email
    garethPortfolio.factory('emailService', function ($rootScope, $http) {

        var serviceObj = {};

        serviceObj.sendEmail = function (formData, callbackSuccess, callbackFailure) {
            $http({
                method: 'POST',
                url: '/formEmail',
                data: $.param(formData),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (data) {
                callbackSuccess(data);
            }).error(function (data) {
                callbackFailure(data);
            })
        };

        return serviceObj;
    });


    //service to send email
    garethPortfolio.factory('nodeService', function ($rootScope, $http) {

        var serviceObj = {};

        serviceObj.nodeTest1 = function(){
         console.log('yes');
            
        }

        return serviceObj;
    });