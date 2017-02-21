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
        },
        resolve:{
          getUser:['Customer',function(Customer){
            return Customer.getCurrent().$promise
          }],
          getOrders:['getUser','Customer',function(getUser,Customer){
            let user = getUser
            return Customer.orders({id:user.id,filter:{
              include:[
                'shop',
                {orderItems:[
                  'product',
                  'productValuePack'
                ]}
              ]
            }}).$promise
          }]
        }

      });
  })

.name;

export default myOrdersModule;
