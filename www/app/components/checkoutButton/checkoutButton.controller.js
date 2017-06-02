class CheckoutButtonController {
  constructor($localStorage,Customer,$state,cartBuilder,$q) {
    this.name = 'checkoutButton';
    this._localStorage = $localStorage.$default({
      myCart:[]
    })
    this._$state = $state
    this._Customer = Customer
    this._CartBuilder = cartBuilder
    this._$q = $q
  }

  clickHandler(shopId){
    let self = this
    /*if(this._Customer.getCurrent()) {
      this.checkout()
    }else{
      this._$state.go('login')
    }*/
    /*this._Customer.getCurrent().$promise.then((user)=>{
      self.checkout(user,shopId)
    },()=>{
      console.log("Error")
    })*/
  }

  checkout(user,shopId){
    let self = this

    if(shopId) {
      let data = this._CartBuilder.getCart(shopId)
      console.log(data)
      self._Customer.orders.create({id: user.id}, data).$promise.then((order)=> {
        console.log(order)
        self._CartBuilder.clearCart(shopId)
        self._$state.go('sidemenu.orderDetail', {id: order.id})
      }, ()=> {
        console.log("Cannot create order")
      })
    }else{
      let datas = this._CartBuilder.getAllCart()
      let promises = []
      datas.forEach((data)=>{
        promises.push(self._Customer.orders.create({id:user.id},data).$promise)
      })

      this._$q.all(promises).then((results)=>{
        console.log(results)
        self._CartBuilder.clearAllCart()
        self._$state.go('sidemenu.myOrder')
      },(error)=>{
        console.log("Cannot create order (multiple)")
      })
    }

  }


}
CheckoutButtonController.$inject = ['$localStorage','Customer','$state','cartBuilder','$q']
export default CheckoutButtonController;
