define(['./module'], function (controllers) {
	'use strict';

	controllers.controller('compileCtrl', ['$scope', function ($scope) {
		$scope.css = {};
		$scope.property = {
			'transition' : ["-webkit-transition", "-moz-transition", "-o-transition" , "transition"],
			'transform' : ["-webkit-transform", "-moz-transform", "-o-transform", "-ms-transform" , "transform"],
			'border-radius' : ['border-radius', '-webkit-border-radius', '-moz-border-radius'],
			'box-shadow' : ['box-shadow', '-webkit-box-shadow'],
			'column-gap':['column-gap', '-webkit-column-gap', '-moz-column-gap'],
			'column-count':['column-count', '-webkit-column-count', '-moz-column-count'],
			'column-rule':['column-rule', '-webkit-column-rule', '-moz-column-rule'],
			'column-rule-color':['column-rule-color', '-webkit-column-rule-color', '-moz-column-rule-color'],
			'column-rule-style':['column-rule-style', '-webkit-column-rule-style', '-moz-column-rule-style'],
			'column-rule-width':['column-rule-width', '-webkit-column-rule-width', '-moz-column-rule-width'],
			'column-width':['column-width', '-webkit-column-width', '-moz-column-width'],
			'box-sizing' : ['box-sizing', '-webkit-box-sizing', '-moz-box-sizing'],
			'border-image' : ['border-image', '-webkit-border-image', '-moz-border-image', '-o-border-image'],
			'transform-origin': ['transform-origin', '-ms-transform-origin', '-moz-transform-origin', '-o-transform-origin'],
			'transform-style': ['transform-style', '-webkit-transform-style', '-moz-transform-style', '-o-transform-style'],
			'perspective' : ['perspective', '-webkit-perspective', '-moz-perspective'],
			'perspective-origin' : ['perspective-origin', '-webkit-perspective-origin', '-moz-perspective-origin'],
			'backface-visibility' : ['backface-visibility', '-webkit-backface-visibility', '-moz-backface-visibility'],
			'animation' : ['animation', '-webkit-animation', '-moz-animation', '-o-animation'],
			'resize' : ['resize', '-moz-resize'],
			'outline-offset' : ['outline-offset', '-moz-outline-offset']
		}
		

		$scope.replace = function () {

			// all selector in $scope.css
			var keys = Object.keys($scope.css);

			angular.forEach(keys, function (value, key) { // for each selector

				//i'm getting all properties and i  search the cross browser properties
				var prop = $scope.css[value];
 
				angular.forEach(prop, function (value, key) { // for each property

					if($scope.property[key]) {
						addProperty(prop, key, value)
					}
				});
			});

			$scope.compile();// compile css

			function addProperty(prop, key, val) {
				
				angular.forEach($scope.property[key], function (value, key) {
					prop[value] = val;
				});
			}
		}

		$scope.compile = function () {
			var str = '';

			angular.forEach($scope.css, function (value, key) {
				str += key + " { \n";

				angular.forEach($scope.css[key], function (value, key) {
					str +=  "\t" + key + ": " + value + "\n";
				});

				str += "}\n\n";
			});

			$scope.css = {}
			$scope.cross = str;
			$scope.$apply("css");
			$scope.$apply("cross");
		}

	}]);
	
});

