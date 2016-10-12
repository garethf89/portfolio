/* Controllers */

var garethPortfolioControllers = angular.module('garethPortfolioControllers', []);

//Controller for the display of portfolios
garethPortfolioControllers.controller('portfolioItems', ['$scope', '$routeParams',  '$location', 'dataService','$sce','lastFmService', '$anchorScroll','$http',

 function ($scope, $routeParams, $location, dataService,$sce,lastFmService, $anchorScroll,$http,message) {
     this.tech_classes = {
	        'AngularJS': 'devicons devicons-angular',
            'CSS3': 'devicons devicons-css3',
            'HTML5': 'fa fa-html5',
            'Responsive Design': 'devicons devicons-responsive',
            'JQuery & Javascript': 'devicons devicons-javascript_badge',
            'PHP': 'devicons devicons-php',
            'Adobe Flash': 'fa fa-flash',
            'MySQL': 'devicons devicons-mysql',
            'SQL Lite': 'fa fa-database',
            'PostgreSQL': 'devicons devicons-postgresql',
            'Wordpress': 'fa fa-wordpress',
            'PayPal': 'fa fa-paypal',
            'SASS': 'devicons devicons-sass'
        };

        //prevent sorting on ngrepeat
        this.notSorted = function(obj){
            if (!obj) {
                return [];
            }
            return Object.keys(obj);
        }

        var $this = this;
        this.portfolios = false;

        //resposive image solution
        if($(window).width() > 767){
            this.size = 'full';
        }else{
            this.size = 'small';
        }

        //retina?
        if(window.matchMedia){

            var retinaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                             (min-resolution: 144dpi)";

            if (window.matchMedia(retinaQuery).matches && this.size == "full"){
                this.size = 'high';
            } else if (window.matchMedia(retinaQuery).matches && this.size == "small"){
                this.size = 'full';
            }

        }

        dataService.getPortfolioItems().then(function (result) {

            $this.portfolios = result;

            if ($routeParams.workID) {

                if ($this.portfolios[$routeParams.workID]) {
                    $scope.currentItem = $this.portfolios[$routeParams.workID];

                      $scope.convertToHTML = function() {
                            return $sce.trustAsHtml($scope.currentItem.desc);
                      };

                } else {
                    $location.path('/');
                }

            }

            $scope.status = 'ready';

        }, function () {
            //console.log('error');
        });

    $(".fancybox").fancybox();

     //last.fm plays
    this.getLastFMAlbums = function (){
        lastFmService.getAlbums().then(function(albums) {
            $scope.albums = albums.topalbums.album;
        });
    }

    this.getLastFMAlbums();

    this.workScroll = function(){
        $('body').animate({scrollTop:$('#main_content').position().top - 100}, '500', 'swing');
    }

}]);

//Controller for the contact form
garethPortfolioControllers.controller('contactForm', ['$scope', '$http','emailService',

 function ($scope, $http, emailService) {

        //Hold form data
        $scope.formData = {};

        //form submit
        $scope.submitEnquiry = function () {

            //call service
            emailService.sendEmail($scope.formData, function(data){
                if (data == 'success') {
                    $scope.showSuccessMessage = 'true';
                } else {
                    $scope.showErrorMessage = 'true';
                }
            }, function(data){
                $scope.showErrorMessage = 'true';
            });
        }


}]);


var garethPortfolio = angular.module('garethPortfolio',['ngRoute','ngAnimate','garethPortfolioControllers','ngSanitize', 'ngAria']);


garethPortfolio.config(['$routeProvider','$locationProvider','$ariaProvider',
  function($routeProvider,$locationProvider,$ariaProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/homepage.html',
        controller: 'portfolioItems',
        controllerAs: 'pI',
      }).
      when('/my_work', {
        templateUrl: '/homepage.html',
        controller: 'portfolioItems',
        controllerAs: 'pI',
      }).
        when('/contact', {
        templateUrl: '/contact.html',
        controller: 'contactForm'
      }).
      when('/:workID', {
        templateUrl: '/work.html',
        controller: 'portfolioItems',
        work: 'yes',
        controllerAs: 'pI'
      }).
      otherwise({
        redirectTo: '/'
      });


      $ariaProvider.config({
          tabindex: true,
          ariaHidden: true
      });

      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');

  }]);

    garethPortfolio.run(["$rootScope", "$location", "$anchorScroll", "$routeParams", function ($rootScope, $location, $anchorScroll, $routeParams) {

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

    }]);

    //mobile menu slideout
    garethPortfolio.directive("menu",["$window", function ($window) {
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
    }]);

    //directive to show menu on scroll
    garethPortfolio.directive("scroll",["$window", function ($window) {
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
    }]);

  //Service to get JSON data
  garethPortfolio.factory("dataService", ["$rootScope", "$http", "$q", function($rootScope, $http, $q) {

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

 }]);

    garethPortfolio.directive('fancybox',["$compile", "$timeout", function($compile, $timeout){
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
    }]);


    //service to send email
    garethPortfolio.factory('emailService', ["$rootScope", "$http", function ($rootScope, $http) {

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
    }]);

    //last fm service
    garethPortfolio.factory('lastFmService', ["$rootScope", "$http", "$q", function ($rootScope, $http, $q) {

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

    }]);
