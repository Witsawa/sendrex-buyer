class MyCartProductListController {
  constructor($localStorage,$ionicLoading,Product,$filter,$scope,cartBuilder,$rootScope,$ionicPopup,Customer,$state,$q,Order) {
    this.name = 'myCartProductList';
    let self = this
    this._$filter =$filter
    this.carts = cartBuilder.getDetailedItems()
    this.cartsData = cartBuilder.getAllCart()
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
    
    //TODO: need to load shopper preferred currency
    this.currency = "USD"
    //this.currentLocation = {geolocation:{lat:0,lng:0},formatted_address:''}



    $scope.$watch(()=>{
      return this.carts
    },(newVal)=>{
      if(newVal){
        /*if(this.carts.length == 1 ){
          console.log(this.carts)
          console.log(this.cartsData)
          this._$rootScope.$broadcast('wizard:IndexChanged',0,1)
        }*/
        self.totalPrice = 0
        newVal.forEach((item)=>{
          //calculate total price
          self.totalPrice += item.totalPrice
        })
      }
    },true)

  }
  /*loadCart(){
    let self = this
    this._$ionicLoading.show()
    this._Product.find({
      filter:{
        where:{
          id:{
            inq:this._localStorage.myCart.map((item)=>{return item.productId})
          }
        },
        include:'shop'
      }
    }).$promise.then((products)=>{
      self.products = this._localStorage.myCart.map((item)=>{

        //map product
        item.product = this._$filter('filter')(products, {id: item.productId})[0]

        //map productVariant
        item.productVariant = this._$filter('filter')(item.product.productVariants, {id: item.productVariantId})[0]

        //map optionValues
        let optionValues = item.product.productOptions.reduce((result,option)=>{
          result = result.concat(option.productOptionValues.map((optionValue)=>{
            let clonedOption = angular.copy(option)
            delete clonedOption.productOptionValues
            optionValue.option = clonedOption
            return optionValue
          }))
          return result
        },[])
        optionValues = this._$filter('filter')(optionValues, (optionValue)=>{
          return item.product_option_values.indexOf(optionValue.id) > -1
        })

        item.optionValues = optionValues
        //TODO: need to convert currency

        return item
      })
      console.log(self.products)
    }).finally(()=>{
      this._$ionicLoading.hide()
    })
  }*/
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
          self.carts = self._cartBuilder.getDetailedItems()
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
  /*checkoutButtonHandler(){
    let self = this
    this._Customer.getCurrent().$promise.then((user)=>{
      self.checkout(user)
    },()=>{
      console.log("Error")
    })
  }

  checkout(user){
    let self = this

    let datas = this._cartBuilder.getAllCart()
    console.log(datas)
      let promises = []
      Object.keys(datas).forEach((key)=>{
        let data = datas[key]
        //Get all price for cart from server
        promises.push(self._Order.calculatePrice({cart:data}).$promise)
      })

      this._$q.all(promises).then((results)=>{
        console.log(results)
        //self._cartBuilder.clearAllCart()
        self._$state.go('sidemenu.checkout')

      },(error)=>{
        console.log("Cannot create order (multiple)")
      })

  }*/
}


MyCartProductListController.$inject =['$localStorage','$ionicLoading','Product','$filter','$scope','cartBuilder','$rootScope','$ionicPopup','Customer','$state','$q','Order']

export default MyCartProductListController;
