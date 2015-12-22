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