import shoppingPage from './shopping.page';
let shoppingModule = angular.module('shopping', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.home.shopping', {
        url: '/shopping',
        views: {
          'home-shopping-content': {
            template: shoppingPage.template,
            controller: shoppingPage.controller
          }
        }

      });
  })

.name;

export default shoppingModule;
