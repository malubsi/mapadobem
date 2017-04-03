angular.module('starter').service("bairrosAPIService",function($http, Server){

 this.getBairros = function(){
   return $http.get(Server.url + "/bairros/?format=json");
 };

});
