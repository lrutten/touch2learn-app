/*
  This module contains all the controllers
 */

angular.module('t2l.controllers', [])

.filter('html',function($sce)
{
    return function(input)
    {
        return $sce.trustAsHtml(input);
    }
})

// not used
//.controller('DashCtrl', function($scope) {})

/*
  Not used
  
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
 */

/*
  All the following modules make use of the Learn service.
 */

.controller('WoordenCtrl', function($scope, Learn) {
  //console.log("WoordenCtrl function()");

  $scope.intenties     = Learn.alleIntenties();
  $scope.begeleidingen = Learn.alleBegeleidingen();
})

.controller('WerkvormenCtrl', function($scope, Learn) {
  console.log("WerkvormenCtrl function()");
  $scope.werkvormen = Learn.alleWerkvormen();
})

.controller('WerkvormCtrl', function($scope, $stateParams, $sce, Learn) {
  console.log("WerkvormCtrl function()");
  $scope.werkvorm = Learn.getWerkvorm($stateParams.werkvormId);
})

.controller('AppsCtrl', function($scope, Learn) {
  console.log("AppsCtrl function()");
  $scope.apps = Learn.alleApps();
})

.controller('AppCtrl', function($scope,  $stateParams, Learn) {
  console.log("AppCtrl function()");
  $scope.app = Learn.getApp($stateParams.appId);
});

/*
  Not used
  
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
 */

