angular.module('starter').controller("BairrosCtrl", function($scope, bairrosVar){
  $scope.bairros = bairrosVar.data;
});
