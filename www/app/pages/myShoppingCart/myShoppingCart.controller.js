class MyShoppingCartController {
  constructor($state,Order) {
    this.name = 'myShoppingCart';
    this._$state = $state
    this._Order = Order
  }
  checkout() {
    this._$state.go('sidemenu.checkout')
  }
}
MyShoppingCartController.$inject = ['$state','Order']
export default MyShoppingCartController;
