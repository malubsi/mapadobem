angular.module('starter').controller("CategoriasCtrl", function($scope, categoriasVar){
  $scope.categorias = categoriasVar.data;
});
