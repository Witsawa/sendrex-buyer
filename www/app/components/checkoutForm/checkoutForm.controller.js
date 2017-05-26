class CheckoutFormController {
  constructor(cartBuilder,Order,$q,$state) {
    this.name = 'checkoutForm';
    this._cartBuilder = cartBuilder
    this._Order = Order
    this.card = undefined
    this._$q = $q
    this._$state = $state
    this.currency = "THB"
    this.paymentMethod = {
      method: {},
      card: {}
    }
    this.deliveryLocation = this._cartBuilder.getDeliveryLocation()
    this.fetchData()
  }
  fetchData() {
    let self = this
    let datas = this._cartBuilder.getAllCart()
    console.log(datas)
    self._Order.getCartsInfo({carts:datas}).$promise.then((result)=>{
      self.data = result
    },(error)=>{
      console.log("Cannot create order (multiple)")
    })
  }
  checkout() {
    if(!this.paymentMethod.method.name){
      return
    }
    if(this.paymentMethod.method.name == "Credit card" && Object.keys(this.paymentMethod.card).length == 0){
      return
    }
    let self = this
    let datas = this._cartBuilder.getAllCart()
    console.log(datas)
    let promises = []
    Object.keys(datas).forEach((shopId)=>{
      var data = angular.copy(datas[shopId])
      data['payment_channel'] = this.paymentMethod.method.name
      if(this.paymentMethod.method.name == "Credit card"){
        data['charge'] = {
          source:'omise',card_token:this.paymentMethod.card.id,currency:'thb'
        }
      }
      
      promises.push(self._Order.create(data).$promise)
    })

    this._$q.all(promises).then((results)=>{
      console.log(results)
      self._cartBuilder.clearAllCart()
      self._$state.go('sidemenu.myOrders')
    },(error)=>{
      console.log("Cannot create order (multiple)")
    })
    /*this._Transaction.create({carts:datas,source:'omise',card_token:this.card.id,currency:'thb'}).$promise.then(function (rsp) {
      console.log(rsp)
    },function (err) {
      console.log(err)
    })*/
  }
}
CheckoutFormController.$inject = ['cartBuilder','Order','$q','$state']

export default CheckoutFormController;
