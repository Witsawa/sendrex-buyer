class ShopDetailController {
  constructor(getShop) {
    this.name = 'shopDetail';
    this.shop = getShop
  }
}

ShopDetailController.$inject = ['getShop']

export default ShopDetailController;
