angular.module('starter').controller("ElementoDetalhesCtrl", function($scope, $cordovaSocialSharing, $ionicLoading, $window, elementosVar){
  $scope.elementos = elementosVar.data;

  //Quando ElementosCtrl for usado por elementoDetalhes.html só será retornado um elemento,
  //para não exibir campos nulos criamos essa abordagem para ser verificado por ng-show.
  var verificaCampo = $scope.elementos[0];
  $scope.descricao = verificaCampo.descricao;
  $scope.categorias = verificaCampo.lista_de_categorias;
  $scope.endOficial = verificaCampo.endereco_oficial;
  $scope.endUsual = verificaCampo.endereco_usual;
  $scope.nomeProprietario = verificaCampo.nome_do_proprietario;
  $scope.telefone = verificaCampo.telefone;
  $scope.artistas = verificaCampo.lista_de_artistas;
  $scope.obras = verificaCampo.lista_de_obras;
  $scope.linkDoVideo = verificaCampo.link_do_video;


  $scope.buscarMapa = function(elemento){
    window.plugins.deviceFeedback.acoustic();
    var mapaConcatenado = "http://maps.google.com/maps?q=description+("+ elemento.nome +")+%40"+ elemento.latitude + "," + elemento.longitude;
    $window.open(mapaConcatenado, "_system");
  };


  $scope.shareAnywhere = function(elemento) {
    window.plugins.deviceFeedback.acoustic();
    $ionicLoading.show();
    var mapaConcatenado = "http://maps.google.com/maps?q=description+("+ elemento.nome +")+%40"+ elemento.latitude + "," + elemento.longitude;
    // this is the complete list of currently supported params you can pass to the plugin (all optional)
    var options = {
      message: elemento.nome, // not supported on some apps (Facebook, Instagram)
      files: [elemento.imagem.original], // an array of filenames either locally or remotely
      url: mapaConcatenado,
      chooserTitle: elemento.nome // Android only, you can override the default share sheet title
    };
    var onSuccess = function(result) {
      $ionicLoading.hide();
      console.log("Compartilhamento completado? " + result.completed); // On Android apps mostly return false even while it's true
      console.log("Compartilhado no: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    };

    var onError = function(msg) {
      $ionicLoading.hide();
      console.log("Falha ao compartilhar: " + msg);
    };
    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

      // $cordovaSocialSharing
      //   .share(elemento.descricao, elemento.nome, elemento.imagem.original, mapaConcatenado)
      //   .then(function(result) {
      //   // Success!
      //   $ionicLoading.hide();
      // }, function(err) {
      //   // An error occured. Show a message to the user
      // });

  };

});
