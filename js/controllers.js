/* Controllers */

var garethPortfolioControllers = angular.module('garethPortfolioControllers', []);

//Controller for the display of portfolios
garethPortfolioControllers.controller('portfolioItems', ['$scope', '$routeParams', '$location', 'dataService','$sce',

 function ($scope, $routeParams, $location, dataService,$sce) {

        $scope.tech_classes = {
            'CSS3': 'tech_css',
            'HTML5': 'tech_html',
            'Responsive Design': 'tech_responsive',
            'JQuery & Javascript': 'tech_jquery',
            'PHP': 'tech_php',
            'Flash Builder': 'tech_fb',
            'Adobe Flash': 'tech_fl',
            'MySQL': 'tech_db',
            'SQL Lite': 'tech_db',
            'PostgreSQL': 'tech_db',
            'Wordpress': 'tech_wordpress',
            'PayPal': 'tech_paypal'
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

        }, function () {
            console.log('error');
        });

}]);

//Controller for the contact form
garethPortfolioControllers.controller('contactForm', ['$scope', '$http',

 function ($scope, $http) {

        //Hold form data
        $scope.formData = {};

        //form submit
        $scope.submitEnquiry = function () {


            $http.post('/formEmail.php', $scope.formData)
                .success(function (data) {
                    if (data == 'success') {
                        $scope.showSuccessMessage = 'true';
                    } else {
                        $scope.showErrorMessage = 'true';
                    }
                });


        }

}]);