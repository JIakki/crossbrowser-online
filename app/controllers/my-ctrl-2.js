define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('formCtrl',function($scope, $http) {
	    $scope.user = {};
	    $scope.submit = function() {
	        if ( $scope.form.$valid ) {
	            $http.post( 'form.php', $scope.user ).success(function( res ){
					$scope.user = {};
	                $scope.form.$setPristine();
	                
	               var plane =  document.getElementById("plane");
	               plane.style.display = "block";

	               setTimeout(function () {
	               		angular.element(plane).addClass("plane-move");
	               	}, 100);

	                setTimeout(function () {
	               		angular.element(plane).removeClass("plane-move");
	               		plane.style.display = "none";
	               	}, 2100);

	            }).error(function(err){
	                alert(err);
	            });
	        }
	    }
	});
   
});