class ShopDetailController {
  constructor(getShop,$ionicHistory,$scope) {
    this.name = 'shopDetail';
    this.shop = getShop
  }
  

}

ShopDetailController.$inject = ['getShop','$ionicHistory','$scope']

export default ShopDetailController;
