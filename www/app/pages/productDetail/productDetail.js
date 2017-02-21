import productDetailPage from './productDetail.page';

let productDetailModule = angular.module('productDetailPage', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.home.productDetail', {
        url: '/product/:id',
        views:{
          'home-shopping-content': {
            template:productDetailPage.template,
            controller:productDetailPage.controller,
            controllerAs:'$ctrl'
          }
        },
        resolve:{
          getProduct:['Product','$stateParams',function(Product,$stateParams){
            return Product.findById({id:$stateParams.id,filter:{include:['shop','promotions','productVariants',{productOptions:['productOptionValues']}]}}).$promise
          }]
        }


      })
      .state('sidemenu.home.shopProductDetail', {
        url: '/product/:id',
        views:{
          'home-shops-content': {
            template:productDetailPage.template,
            controller:productDetailPage.controller,
            controllerAs:'$ctrl'
          }
        },
        resolve:{
          getProduct:['Product','$stateParams',function(Product,$stateParams){
            return Product.findById({id:$stateParams.id,filter:{include:'shop'}}).$promise
          }]
        }


      })
      .state('sidemenu.wishListProductDetail', {
        url: '/product/:id',
        views:{
          'sidemenu-content': {
            template:productDetailPage.template,
            controller:productDetailPage.controller,
            controllerAs:'$ctrl'
          }
        },
        resolve:{
          getProduct:['Product','$stateParams',function(Product,$stateParams){
            return Product.findById({id:$stateParams.id,filter:{include:'shop'}}).$promise
          }]
        }


      });
  })

.name;

export default productDetailModule;
