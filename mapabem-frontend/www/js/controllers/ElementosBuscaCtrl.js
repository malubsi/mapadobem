angular.module('starter').controller("ElementosBuscaCtrl", function($scope, $location, $ionicPopup, $state, elementosVar){

  $scope.elementos = elementosVar.data;


  if($scope.elementos.length == 0){
    $ionicPopup.alert({
     title: 'Alerta',
     cssClass: 'alertPopUp',
     template: 'Desculpe, mas ainda não existem dados para essa busca.'
   }).then(function(){
     $state.go('app.procurar');
   });
 };

 $scope.goToRoute = function(elemento){
   var link = 'app/elementoDetalhes/' + elemento.id;
   $location.path(link);
 };



});
