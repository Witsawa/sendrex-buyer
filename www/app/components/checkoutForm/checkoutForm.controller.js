class CheckoutFormController {
  constructor(cartBuilder,Order,$q) {
    this.name = 'checkoutForm';
    this._cartBuilder = cartBuilder
    this._Order = Order
    this._$q = $q
    this.fetchData()
    this.carts = []
  }
  fetchData() {
    let self = this
    let datas = this._cartBuilder.getAllCart()
    let promises = []
    Object.keys(datas).forEach((key)=>{
      let data = datas[key]
      //Get all price for cart from server
      promises.push(self._Order.calculatePrice({cart:data}).$promise)
    })

    this._$q.all(promises).then((results)=>{
      this.carts = results
    },(error)=>{
      console.log("Cannot create order (multiple)")
    })
  }
}
CheckoutFormController.$inject = ['cartBuilder','Order','$q']

export default CheckoutFormController;
