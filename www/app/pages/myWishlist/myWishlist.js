import myWishlistPage from './myWishlist.page';

let myWishlistModule = angular.module('myWishlist', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.myWishlist', {
        url: '/myWishlist',
        views: {
          'sidemenu-content': {
            template: myWishlistPage.template,
            controller: myWishlistPage.controller
          }
        }

      });
  })

.name;

export default myWishlistModule;
