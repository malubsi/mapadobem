angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
  })

  .state('app.sobre', {
    url: '/sobre',
    views: {
      'menuInfo': {
        templateUrl: 'templates/sobre.html'
      }
    }
  })

  .state('app.procurar', {
      url: '/procurar',
      views: {
        'menuContent': {
          templateUrl: 'templates/procurar.html',
          controller:'ProcurarCtrl'
        }
      },
      resolve:{
              bairrosVar: function(bairrosAPIService){
                return bairrosAPIService.getBairros();
              },
              categoriasVar: function(categoriasAPIService){
                return categoriasAPIService.getCategorias();
              }
      }
    })

    .state('app.bairros', {
      url: '/bairros',
      views: {
        'menuContent': {
          templateUrl: 'templates/bairros.html',
          controller: 'BairrosCtrl'
        }
      },
      resolve:{
              bairrosVar: function(bairrosAPIService){
                return bairrosAPIService.getBairros();
              }
      }
    })

    .state('app.bairro', {
        url: '/bairro/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/elementos.html',
            controller: "ElementosBairroCtrl"
          }
        },
        resolve:{
                elementosVar: function(elementosAPIService, $stateParams){
                        return elementosAPIService.getElementoInBairro($stateParams.id);
                }
        }
      })

      .state('app.categorias', {
        url: '/categorias',
        views: {
          'menuContent': {
            templateUrl: 'templates/categorias.html',
            controller: 'CategoriasCtrl'
          }
        },
        resolve:{
                categoriasVar: function(categoriasAPIService){
                  return categoriasAPIService.getCategorias();
                }
        }
      })

      .state('app.categoria', {
          url: '/categoria/:id',
          views: {
            'menuContent': {
              templateUrl: 'templates/elementos.html',
              controller: "ElementosCategoriaCtrl"
            }
          },
          resolve:{
                  elementosVar: function(elementosAPIService, $stateParams){
                          return elementosAPIService.getElementoInCategoria($stateParams.id);
                  }
          }
        })

        .state('app.elementos', {
            url: '/elementos',
            views: {
              'menuContent': {
                templateUrl: 'templates/elementos.html',
                controller: "ElementosCtrl"
              }
            },
            resolve:{
                    elementosVar: function(elementosAPIService){
                            return elementosAPIService.getElementos();
                    }
            }
          })

        .state('app.elementosBusca/:idBairro/:idCategoria', {
            url: '/elementoBusca/:idBairro/:idCategoria',
            views: {
              'menuContent': {
                templateUrl: 'templates/elementos.html',
                controller: "ElementosBuscaCtrl"
              }
            },
            resolve:{
                    elementosVar: function(elementosAPIService, $stateParams){
                            return elementosAPIService.getElementoInBairroCategoria($stateParams.idBairro, $stateParams.idCategoria );
                    }
            }
          })

          .state('app.elementoDetalhes', {
              url: '/elementoDetalhes/:id',
              views: {
                'menuContent': {
                  templateUrl: 'templates/elementoDetalhes.html',
                  controller: "ElementoDetalhesCtrl"
                }
              },
              resolve:{
                      elementosVar: function(elementosAPIService, $stateParams){
                              return elementosAPIService.getElementoDetalhes($stateParams.id );
                      }
              }
            });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/procurar');
});
