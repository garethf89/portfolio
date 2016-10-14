
var garethPortfolio = angular.module('garethPortfolio',['ui.router','ngAnimate','garethPortfolioControllers','ngSanitize', 'ngAria']);


garethPortfolio.config(['$stateProvider', '$urlRouterProvider','$locationProvider', '$ariaProvider',
  function($stateProvider,$urlRouterProvider,$locationProvider,$ariaProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
          url: '/',
          templateUrl: 'homepage.html',
          controller: 'portfolioItems',
          controllerAs: 'pI'
      })
        .state('contact', {
              url: '/contact',
              templateUrl: 'contact.html',
              controller: 'contactForm'
        })
        .state('work', {
              url: '/:workID',
              templateUrl: 'work.html',
              controller: 'workItem',
              controllerAs: 'pI'
        });

      $ariaProvider.config({
          tabindex: true,
          ariaHidden: true
      });

      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');

  }]);

    garethPortfolio.run(function ($rootScope, $location, $anchorScroll) {

        var counterStatus = 'off';

        var connectionString = "http://garethferguson.co.uk:3000"
        if(document.location.toString().indexOf('garethferguson.co.uk') === -1){
            connectionString = "http://local.gareth.com:3000";
        }

        var socket = io.connect(connectionString, {resource: '/api/index.js'});
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

    //mobile menu slideout
    garethPortfolio.directive("menu",function ($window) {
      return {
        link: function(scope, element, attrs) {
            var slideout = new Slideout({
               'panel': document.getElementById('content'),
               'menu': document.getElementById('menu'),
               'padding': 200,
               'tolerance': 70,
               'fx': 'ease-in-out',
               'duration' : 400
             });
             document.getElementById('nav__pullDown').addEventListener('click', function() {
              slideout.toggle();
              this.classList.toggle('active');
            });
       }
       };
    });

    //directive to show menu on scroll
    garethPortfolio.directive("scroll",function ($window) {
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

    garethPortfolio.directive('fancybox',function($compile, $timeout){
        return {
            link: function($scope, element, attrs) {
                element.fancybox({
                    hideOnOverlayClick:false,
                    hideOnContentClick:false,
                    showNavArrows:true,
                    onComplete: function(){
                        $timeout(function(){
                            $compile($("#fancybox-content"))($scope);
                            $scope.$apply();
                            $.fancybox.resize();
                        })
                    }
                });
            }
        }
    });


    //service to send email
    garethPortfolio.factory('emailService', function ($rootScope, $http) {

        var serviceObj = {};

        serviceObj.sendEmail = function (formData, callbackSuccess, callbackFailure) {
            $http({
                method: 'POST',
                url: '/api/formEmail',
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

    //last fm service
    garethPortfolio.factory('lastFmService', function ($rootScope, $http, $q) {

            var serviceObj = {},
                albums,
                deferred = $q.defer();

            //get albums JSOn
        	serviceObj.requestAlbumData = function(){
                return $http({
                    method: 'POST',
                    url: '/api/lastFm',
                    data: 'name=DirtyG',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    albums = data;
                    deferred.resolve(data);
                    return deferred.promise;
                }).error(function (data) {
                    deferred.resolve(data);
                    return deferred.promise;
                })
            }

            //return albums object
            serviceObj.getAlbums = function () {
                if(albums){
                    deferred.resolve(albums);
				    return deferred.promise;
                }else{
                    return serviceObj.requestAlbumData().then(function(result){
                        deferred.resolve(albums);
                        return deferred.promise;
				    });
                }
            }

        return serviceObj;

    });
