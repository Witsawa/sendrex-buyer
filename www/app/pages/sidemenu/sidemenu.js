import sidemenuPage from './sidemenu.page';
let sidemenuModule = angular.module('sidemenu', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu', {
        url: '/sidemenu',
        abstract:true,
        views:{
          'root@':{
            template:sidemenuPage.template,
            controller:sidemenuPage.controller,
            controllerAs:'$ctrl'
          }
        },
        resolve:{
          getCurrentUser:['Customer',(Customer)=>{
              return Customer.getCurrent().$promise
          }],
        }


      });
  })

.name;

export default sidemenuModule;
