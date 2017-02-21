import myShoppingCartPage from './myShoppingCart.page';

let myShoppingCartModule = angular.module('myShoppingCart', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.myShoppingCart', {
        url: '/myShoppingCart',
        views:{
          'sidemenu-content':{
            template:myShoppingCartPage.template,
            controller:myShoppingCartPage.controller,
            controllerAs:'$ctrl'
          }
        }


      });
  })

.name;

export default myShoppingCartModule;
