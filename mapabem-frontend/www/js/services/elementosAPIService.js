angular.module('starter').service("elementosAPIService",function($http, Server){
   this.getElementos = function(){
        return $http.get(Server.url +"/todos/?format=json");
    };

    this.getElementoDetalhes = function(id){
         return $http.get(Server.url + "/elemento/"+id+"/?format=json");
     };

      this.getElementoInBairro = function(id){
        return $http.get(Server.url + "/todos/bairro/"+id+"/?format=json");
    };

    this.getElementoInCategoria = function(id){
      return $http.get(Server.url + "/todos/categoria/"+id+"/?format=json");
    };

    this.getElementoInBairroCategoria = function(idBairro,idCategoria){
      return $http.get(Server.url + "/todos/bairro/"+idBairro+"/categoria/"+idCategoria+"/?format=json");
    };
});
