angular.module('starter').controller("ProcurarCtrl", function($scope, $location, bairrosVar, categoriasVar){
  var teste;
  $scope.bairros = bairrosVar.data;
  $scope.categorias = categoriasVar.data;


  $scope.goToRoute = function(bairroId, categoriaId){
    var link;
    console.log(bairroId);
    console.log(categoriaId);

    console.log((bairroId !== undefined || bairroId !== null)  && (categoriaId !== undefined || categoriaId !== null));

    console.log((bairroId !== undefined || bairroId !== null) && (categoriaId === undefined || categoriaId === null));

    console.log((categoriaId !== undefined || categoriaId !== null) && (bairroId === undefined || bairroId === null));

    try{
      if(bairroId){
        console.log(bairroId.id);
      }
      if(categoriaId){
        console.log(categoriaId);
      }

      // console.log(bairroId);
      // console.log(categoriaId);
    }
    catch(e){
      console.log(e);
    }


    if((bairroId) && (categoriaId)){
      link = '/app/elementoBusca/' + bairroId.id + '/' + categoriaId.id;
      $location.path(link);
    }

    else if((bairroId) && (!categoriaId)){
      link = '/app/bairro/' + bairroId.id;
      $location.path(link);
    }

    else if((categoriaId) && (!bairroId)){
      link = '/app/categoria/' + categoriaId.id;
      $location.path(link);
    }

    else{
      link = '/app/elementos';
      $location.path(link);
    }
  };
});
