import myOrdersPage from './myOrders.page';

let myOrdersModule = angular.module('myOrders', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.myOrders', {
        url: '/myOrders',
        views: {
          'sidemenu-content': {
            template: myOrdersPage.template,
            controller: myOrdersPage.controller,
            controllerAs:'$ctrl'
          }
        }

      });
  })

.name;

export default myOrdersModule;
