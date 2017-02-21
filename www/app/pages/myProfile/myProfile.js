import myProfilePage from './myProfile.page';

let myProfileModule = angular.module('myProfile', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.myProfile', {
        url: '/myProfile',
        views:{
          'sidemenu-content':{
            template:myProfilePage.template,
            controller:myProfilePage.controller,
            controllerAs:'$ctrl'
          }
        },
        resolve:{
          getUser:['Customer',function(Customer){
            return Customer.getCurrent().$promise
          }]
        }


      });
  })

.name;

export default myProfileModule;
