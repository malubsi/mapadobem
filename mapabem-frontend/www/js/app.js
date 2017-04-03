// Ionic Starter App
angular.module('starter', ['ionic', 'ngCordova']);

angular.module('starter')

.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {

    // Check for network connection
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
        $ionicPopup.alert({
          title: 'Sem Conexão com a Internet',
          content: 'Desculpe, nenhuma conexão com a Internet detectada. Por favor conecte-se com a Internet e tente novamente.'
        })
        .then(function(result) {
            ionic.Platform.exitApp();
        });
      }
    }

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('Server', {
    url: 'http://backend-mapabem.rhcloud.com/core'
})

.config(function($ionicConfigProvider){
  $ionicConfigProvider.platform.android.scrolling.jsScrolling(true);
  $ionicConfigProvider.platform.android.backButton.icon("ion-chevron-left");
  $ionicConfigProvider.platform.android.backButton.text("Voltar");
  $ionicConfigProvider.platform.android.navBar.alignTitle("center");
  $ionicConfigProvider.platform.android.tabs.position("bottom");
  $ionicConfigProvider.platform.android.tabs.style("standard");
});
