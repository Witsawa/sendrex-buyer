import checkoutPage from './checkout.page';

let checkoutModule = angular.module('checkout', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.checkout', {
        url: '/checkout',
        views: {
          'sidemenu-content': {
            template:checkoutPage.template,
            controller:checkoutPage.controller,
            controllerAs:'$ctrl'
          }
        }

      });
  })

.name;

export default checkoutModule;
