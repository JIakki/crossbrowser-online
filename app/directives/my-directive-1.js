define(['./module'], function (directives) {
	'use strict';

	directives.directive('compile', [function () {
		return {		
			link: function(scope, elem, attr, controller) {
					
				elem.on("click", function () {
					var allStyle = scope.original.split("}");

					angular.forEach(allStyle, function (value, key) {	 

						var style = getCSS(value);
						cssInJSON(style.selector, style.property);
					});

					scope.replace();
				});

				function getCSS(value) {
					return {
						"selector" : value.match(/.+{/), // selector {
						"property" : value.match(/[^{;]+;/g) // property : val; }
					}
				}

				function cssInJSON(selec, prop) {

					if(!selec) return;

					selec = selec[0].slice(0, -1).trim(); // selectors

					if(!scope.css[selec]) {
						scope.css[selec] = {};
					}

					angular.forEach(prop, function (value, key) {
						var prop = value.match(/.+:/)[0].slice(0, -1).trim()// property
						var val = value.match(/:.+;/)[0].slice(1).trim(); // val

						scope.css[selec][prop] = val;

					});
				}
			}
		}
	}]);
	
});