/* Controllers */

var garethPortfolioControllers = angular.module('garethPortfolioControllers', []);

/******************************
//Controller for the display of portfolios
*******************************/
garethPortfolioControllers.controller('portfolioItems', ['$scope', '$state', '$location', 'dataService','$sce','lastFmService', '$anchorScroll','$http',

 function ($scope, $state,$location, dataService,$sce,lastFmService, $anchorScroll,$http,message) {

        this.state = $state.current.name;

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

        dataService.getPortfolioItems().then(function(result) {

            $this.portfolios = result;
            $scope.status = 'ready';

          }, function() {
            //console.log('error');
        });

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

/******************************
  Display Single Portfolio
*******************************/
garethPortfolioControllers.controller('workItem', ['$scope', '$state', '$location', 'dataService','$sce','$http',

 function ($scope, $state,$location, dataService,$sce,$http,message) {

      var $this = this;

      //return url for svg includes
      $scope.getSrc = function(target) {

          var base = "",
              url = "";

          switch (target) {
              case "AngularJS":
                  url = "#angular"
                  break;
              case "CSS3":
                  url = "#css"
                  break;
              case "Responsive Design":
                  url = "#responsive"
                  break;
              case "JQuery & Javascript":
                  url = "#jquery"
                  break;
              case "PHP":
                  url = "#php"
                  break;
              case "Adobe Flash":
                  url = "#flash"
                  break;
              case "MySQL":
                  url = "#mysql"
                  break;
              case "SQL Lite":
                  url = "#database"
                  break;
              case "PostgreSQL":
                  url = "#postgres"
                  break;
              case "Wordpress":
                  url = "#wordpress"
                  break;
              case "PayPal":
                  url = "#paypal"
                  break;
              case "SASS":
                  url = "#sass"
                  break;
              default:   url = "#html5";
          }

          url = base + url;
          return url;
      }

       //prevent sorting on ngrepeat
       this.notSorted = function(obj) {
           if (!obj) {
               return [];
           }
           return Object.keys(obj);
       }

   this.portfolios = false;

    $(".fancybox").fancybox();

    dataService.getPortfolioItems().then(function(result) {

      var work = $state.params.workID;
      $this.portfolios = result;
      $scope.status = 'ready';


        if ($this.portfolios[work]) {
            $scope.currentItem = $this.portfolios[work];
            $scope.convertToHTML = function() {
              return $sce.trustAsHtml($scope.currentItem.desc);
            };

        } else {
            $location.path('/');
        }

      }, function() {
        //console.log('error');
    });

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


}]);

/******************************
Controller for the contact form
*******************************/
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
