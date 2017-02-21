import homePage from './home.page';
let homeModule = angular.module('home', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.home', {
        url: '/home',
        views: {
          'sidemenu-content': {
            template: homePage.template,
            controller: homePage.controller,
            controllerAs:'$ctrl'
          }
        },
        abstract:true


      });
  })

.name;

export default homeModule;
