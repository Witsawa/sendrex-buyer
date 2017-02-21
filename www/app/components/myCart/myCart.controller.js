class MyCartController {
  constructor(cartBuilder) {
    this.name = 'myCart';
    this._CartBuilder = cartBuilder
  }
  itemInCart(){
    return this._CartBuilder.count()
  }
}

MyCartController.$inject = ['cartBuilder']

export default MyCartController;
