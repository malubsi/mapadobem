angular.module('starter').service("categoriasAPIService",function($http, Server){

 this.getCategorias = function(){
   return $http.get(Server.url + "/categorias/?format=json");
 };

});
