class MyCartProductListItemController {
  constructor(cartBuilder) {
    this.name = 'myCartProductListItem';
    this._cartBuilder= cartBuilder
  }
}
MyCartProductListItemController.$inject = ['cartBuilder']

export default MyCartProductListItemController;
