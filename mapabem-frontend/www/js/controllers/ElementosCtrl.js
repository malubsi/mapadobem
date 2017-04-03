angular.module('starter').controller("ElementosCtrl", function($scope, $location, $ionicPopup, elementosVar){

  $scope.elementos = elementosVar.data;


  if($scope.elementos.length == 0){
    $ionicPopup.alert({
     title: 'Alerta',
     cssClass: 'alertPopUp',
     template: 'Desculpe, mas ainda não existem dados para essa busca.'
   })
 };

 $scope.goToRoute = function(elemento){
   var link = 'app/elementoDetalhes/' + elemento.id;
   $location.path(link);
 };
});
