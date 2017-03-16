// Ionic Starter App
import 'ionic.app.scss';
import Components from './components/components';
import Pages from './pages/pages';
import AppComponent from './app.component';
import Directives from './directives';
import AngularFilter from 'angular-filter';
import Services from './services/services';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'ngStorage',
  'ngCordova',
  'leaflet-directive',
  'ion-google-place',
  Components,
  Pages,
  Directives,
  AngularFilter,
  Services
])
.run(function($ionicPlatform,$ionicLoading,$rootScope,$state,$location,LoopBackAuth) {
  //$locationProvider.html5Mode(true)
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $rootScope.$on('loading:show', function () {
      $ionicLoading.show()
    });

    $rootScope.$on('loading:hide', function () {
      $ionicLoading.hide();
    });

    $rootScope.$on('$stateChangeStart', function () {
      console.log('please wait...');
      $rootScope.$broadcast('loading:show');
    });

    $rootScope.$on('$stateChangeSuccess', function () {
      console.log('done');
      $rootScope.$broadcast('loading:hide');
    });

    $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {
      console.log('done');
      $rootScope.$broadcast('loading:hide');
      console.error("Error loading the page: %o", error);
      if(error.status == 401){
        event.preventDefault()
        LoopBackAuth.clearUser();
        LoopBackAuth.clearStorage();
        $location.nextAfterLogin = $state.href(toState,toParams)
        $location.path('/login');
      }
    });
  });
})
  .config(($urlRouterProvider,LoopBackResourceProvider,$ionicConfigProvider,$httpProvider,$logProvider) => {
    "ngInject";
    
    // Use a custom auth header instead of the default 'Authorization'
    $logProvider.debugEnabled(false);
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    //LoopBackResourceProvider.setUrlBase('https://send-rex.herokuapp.com/api');
    //LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

    $urlRouterProvider.otherwise('/sidemenu/home/shopping');

    $ionicConfigProvider.views.maxCache(0);

    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth,$injector) {
      return {
        responseError: function(rejection) {
          if (rejection.status == 401) {
            //Now clearing the loopback values from client browser for safe logout...
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $injector.get('$state').go('login');
          }
          return $q.reject(rejection);
        }
      };
    });
  })

  .component('app', AppComponent);
