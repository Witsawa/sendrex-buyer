import servicesPage from './services.page';

let servicesModule = angular.module('services', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.home.services', {
        url: '/services',
        views: {
          'home-services-content@sidemenu.home': {
            template: servicesPage.template,
            controller: servicesPage.controller
          }
        }

      });
  })

.name;

export default servicesModule;
