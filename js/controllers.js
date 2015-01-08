/* Controllers */

var garethPortfolioControllers = angular.module('garethPortfolioControllers', []);

//Controller for the display of portfolios
garethPortfolioControllers.controller('portfolioItems', ['$scope', '$routeParams', '$location', 'dataService','$sce','$anchorScroll','$http',

 function ($scope, $routeParams, $location, dataService,$sce, $anchorScroll,$http,message) {
     
     $scope.tech_classes = {
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
        $scope.notSorted = function(obj){
            if (!obj) {
                return [];
            }
            return Object.keys(obj);
        }

        $scope.portfolios;
     
        dataService.getPortfolioItems().then(function (result) {

            $scope.portfolios = result;
            
            if ($routeParams.workID) {

                if ($scope.portfolios[$routeParams.workID]) {
                    $scope.currentItem = $scope.portfolios[$routeParams.workID];
                    
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
        
        $scope.status = 'ready';
}]);