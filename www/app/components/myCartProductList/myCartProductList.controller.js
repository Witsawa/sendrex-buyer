class MyCartProductListController {
  constructor($localStorage,$ionicLoading,Product,$filter,$scope,cartBuilder,$rootScope,$ionicPopup,Customer,$state,$q,Order,AuthenticationService) {
    this.name = 'myCartProductList';
    let self = this
    this._$filter =$filter
    this.carts = {
      carts:{}
    }
    this._Product = Product
    this._$ionicLoading =$ionicLoading
    //this.loadCart()
    this._cartBuilder = cartBuilder
    this._Customer = Customer
    this.totalPrice = 0
    this._$rootScope = $rootScope
    this._$rootScope.$broadcast('wizard')
    this._$ionicPopup = $ionicPopup
    this._$state = $state
    this._$q = $q
    this._Order = Order
    this._AuthenticationService = AuthenticationService
    this.currency = "THB"
    this.deliveryLocation = this._cartBuilder.getDeliveryLocation()
    this.no_item = true
    this.loadCartData()

  }
  loadCartData(){
    let self = this
    console.log('load cart data')
    this._cartBuilder.getDetailedItems().then(function (carts) {
      self.carts = carts
      self.no_item = Object.keys(carts.carts).length == 0
    },function(err){
      console.log("Cannot get data")
    })
  }
  removeFromCart(shopId,index){
    let self = this
    var confirmPopup = this._$ionicPopup.confirm({
        title: 'Cart',
        template: 'Are you sure you want to delete this item?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
          self._cartBuilder.removeFromCart(shopId,index)
          /*item = this._$filter('filter')(this.carts[item.shopId].order_items, {$$hashkey: item.$$hashkey})[0]
          let index = this.items.indexOf(item)
          index>-1 && this.items.splice(index,1)*/
          self.loadCartData()
        } else {
          console.log('You are not sure');
        }
      });
    
    
    

  }
  setDeliveryAddress(shopId,address){
    this._cartBuilder.setDeliveryAddress(shopId,address)
  }
  setDeliveryMethod(shopId,method){
    this._cartBuilder.setDeliveryMethod(shopId,method)
  }
  deliveryAddressChanged(){
    console.log('addressChange')
    this.carts = this._cartBuilder.getDetailedItems()
  }
  checkoutButtonHandler() {
    let self = this
    if(this._Customer.getCurrentId()){
      self.checkout()
    }else{
      console.log("Error")
      this._AuthenticationService.login()
      /* self.login().then(()=>{
        self.checkout()
      }) */
    }
  }
}


MyCartProductListController.$inject =['$localStorage','$ionicLoading','Product','$filter','$scope','cartBuilder','$rootScope','$ionicPopup','Customer','$state','$q','Order','AuthenticationService']

export default MyCartProductListController;
