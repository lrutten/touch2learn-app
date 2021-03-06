// Ionic Touch2Learn App

/*
  angular.module is a global place for creating, registering and retrieving Angular modules
 't2l' is the name of the main angular module (also set in a <body> attribute in index.html)
 the 2nd parameter is an array of 'requires'
 't2l.controllers' is found in controllers.js
 't2l.services' is found in services.js
 */
 
angular.module('t2l', ['ionic', 't2l.controllers', 't2l.services', 'angular-cache'])

.run(function($ionicPlatform, $http, CacheFactory) {
  $ionicPlatform.ready(function() {
    // angular-cache part
    //    Only his part uses $http and CacheFactory parameters
    // see
    //    https://github.com/jmdobry/angular-cache
    $http.defaults.cache = CacheFactory('defaultCache', 
    {
       maxAge:       12 *  60 * 60 * 1000, // Items added to this cache expire after 12 houres
       cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
       deleteOnExpire:     'aggressive',   // Items will be deleted from this cache when they expire
       storageMode:        'localStorage'  // This cache will use `localStorage`.
    });
    
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  /*
    Setup an abstract state for the tabs directive.
    The url /tab is included in all derived tabs
   */
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
/*
  Not used
  
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
 */
 
 /*
    Show alle the words which can be switch on and off for selection
  */
  .state('tab.woorden', {
    url: '/woorden',
    views: {
      'tab-woorden': {
        templateUrl: 'templates/tab-woorden.html',
        controller: 'WoordenCtrl'
      }
    }
  })

  /*
    Show the selection of werkvormen
   */
  .state('tab.werkvormen', {
    url: '/werkvormen',
    views: {
      'tab-werkvormen': {
        templateUrl: 'templates/tab-werkvormen.html',
        controller: 'WerkvormenCtrl'
      }
    }
  })


  /*
    Show one werkvorm
   */
  .state('tab.werkvorm', {
    url: '/werkvormen/:werkvormId',
    views: {
        'tab-werkvormen': {
          templateUrl: 'templates/tab-werkvorm.html',
          controller: 'WerkvormCtrl'
      }
    }
  })


  /*
    Show one app belonging to a werkvorm
   */
  .state('tab.wvapp', {
    url: '/werkvormen/app/:appId',
    views: {
        'tab-werkvormen': {
          templateUrl: 'templates/tab-app.html',
          controller: 'AppCtrl'
      }
    }
  })

  /*
    Show all apps
   */
  .state('tab.apps', {
    url: '/apps',
    views: {
      'tab-apps': {
        templateUrl: 'templates/tab-apps.html',
        controller: 'AppsCtrl'
      }
    }
  })

  /*
    Show one app
   */
  .state('tab.werkapp', {
    url: '/apps/:appId',
    views: {
        'tab-apps': {
          templateUrl: 'templates/tab-app.html',
          controller: 'AppCtrl'
      }
    }
  });

/*
  Not used 
  
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
  */
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/werkvormen');

});
