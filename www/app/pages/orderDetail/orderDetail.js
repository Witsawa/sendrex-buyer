import orderDetailPage from './orderDetail.page';

let orderDetailModule = angular.module('orderDetail', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.orderDetail', {
        url: '/orderDetail/:id',
        views: {
          'sidemenu-content': {
            template: orderDetailPage.template,
            controller: orderDetailPage.controller,
            controllerAs: '$ctrl'
          }
        },
        resolve:{
          getUser:['Customer',function(Customer){
            return Customer.getCurrent().$promise
          }]/*,
          getOrder:['Customer','getUser','$stateParams',function(Customer,getUser,$stateParams){
            let user = getUser
            console.log($stateParams.id)
            return Customer.orders({
              id: user.id, filter: {
                where: {id: $stateParams.id},
                include: [
                  'shop',
                  {
                    orderItems: [
                      {
                        product:['promotions']
                      },
                      'productVariant',
                      {
                        productValuePack:['promotions']
                      },
                      {
                        productOptionValues:['productOption']
                      },
                      {
                        orderItems: [
                          {
                            product:['promotions']
                          },
                          'productVariant',
                          {
                            productValuePack:['promotions']
                          },
                          {
                            productOptionValues:['productOption']
                          }

                        ]
                      }
                    ]
                  }
                ]
              }
            }).$promise
          }]*/
        }

      });
  })

.name;

export default orderDetailModule;
