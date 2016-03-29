var app = angular.module('myApp', []);

app.directive("scroll", function () {
  return function(scope, element, attrs) {
    angular.element(element).bind("scroll", function() {
      scope[attrs.scroll] = true;
      scope.$apply();
    });
  };
});
