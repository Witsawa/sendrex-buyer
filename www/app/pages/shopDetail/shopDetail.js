import shopDetailPage from './shopDetail.page';


let resolve = {
  getShop:['Shop','$stateParams',function(Shop,$stateParams){
    return Shop.findById({id:$stateParams.id}).$promise
  }]
}

let shopDetailModule = angular.module('shopDetailPage', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.home.shopDetail', {
        url: '/shopDetail/:id',
        views: {
          'home-shops-content': {
            template: shopDetailPage.template,
            controller: shopDetailPage.controller,
            controllerAs: '$ctrl'
          }
        },
        resolve:resolve

      })
  })

.name;

export default shopDetailModule;
