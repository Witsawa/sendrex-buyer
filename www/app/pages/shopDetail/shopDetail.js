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
      .state('sidemenu.shopDetail', {
        url: '/shopDetail/:id',
        views: {
          'sidemenu-content': {
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
