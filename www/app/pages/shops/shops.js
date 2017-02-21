import shopsPage from './shops.page';

let shopsModule = angular.module('shops', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.home.shops', {
        url: '/shops',
        views: {
          'home-shops-content@sidemenu.home': {
            template: shopsPage.template,
            controller: shopsPage.controller
          }
        }

      });
  })

.name;

export default shopsModule;
