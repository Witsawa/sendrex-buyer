/**
 * Created by nattaphatlaoharawee on 11/1/2016 AD.
 */

class cartBuilder{
  constructor($localStorage,$rootScope,Product,ProductValuePack,$filter,Shop,Delivery,Order,$q,$ionicPopup) {
    this.name = 'cartBuilder';
    this.item = {}
    this._localStorage = $localStorage.$default({
      myCart:{},
      deliveryLocation:{}
    })

    this._$rootScope =$rootScope
    this._Product = Product
    this._ProductValuePack = ProductValuePack
    this._$filter = $filter
    this._Shop = Shop
    this._Delivery = Delivery
    this._Order = Order
    this._$q = $q
    this._$ionicPopup = $ionicPopup
    //{productId,variantId,optionId[],valuePackId,quantity,shopId,order_items[]}
  }
  _createProductItem(product){
    product.selectedProductVariantId = product.productVariants[0].id
    this.item.products.push(angular.copy(product))
  }
  _createValuePackItem(valuePack){
    this.item.productValuePackId = valuePack.id
    let products = angular.copy(valuePack.products)
    products.forEach((product)=>{
      product.selectedProductVariantId = product.productVariants[0].id
    })
    this.item.products = this.item.products.concat(products)
  }
  newCartItem(product,valuePack){
    this.item = {quantity:1,productValuePackId:null,products:[]}
    if(product) {
      this._createProductItem(product)
    }else if(valuePack) {
      this._createValuePackItem(valuePack)
    }
    return this.item
  }

  addToCart(item) {
    let data = this.createPostDataFromItem(item)
    console.log(data)
    this._localStorage.myCart[data.shopId] = this._localStorage.myCart[data.shopId] || {shopId:data.shopId,delivery_method:"Delivery",delivery_address:this._localStorage.deliveryLocation,order_items:[]}
    this._localStorage.myCart[data.shopId].order_items.push(data)
  }
  count(){
    return Object.keys(this._localStorage.myCart).reduce((result,shopId)=>{
      let products = this._localStorage.myCart[shopId].order_items
      result += products.length
      return result
      },0)
  }

  validateProduct(product){
    //check if variant is selected
    let invalidException = {}
    let valid = true
    try {
      if (product.selectedProductVariantId == null || product.selectedProductVariantId == undefined) {
        throw invalidException
      }

      product.productOptions.forEach((option)=>{
        //check option
        let selected = false
        option.productOptionValues.forEach((optionValue)=>{
          if(optionValue.checked){
            //multiple option selected when not allow multiple selection
            if(selected && !option.multiple_select){
              throw invalidException
            }
            selected = true
          }
        })

        // no option is selected when option is required
        if(option.require && !selected){
          throw invalidException
        }
      })

    }catch(e){
      if(e !== invalidException){
        throw e
      }else{
        valid = false
      }
    }

    return valid

  }
  validateItem(item){
    let self = this
    return item.products.reduce((result,product)=>{
      return result && self.validateProduct(product)
    },true)
  }

  _createPostDataProductItem(product){
    let postData = {
      productId : product.id,
      shopId: product.shopId,
      productVariantId : product.selectedProductVariantId,
      product_option_values:[]
    }
    //create option
    product.productOptions.forEach((option)=>{
      option.productOptionValues.forEach((optionValue)=>{
        if(optionValue.checked){
          postData.product_option_values.push(optionValue.id)
        }
      })
    })
    return postData
  }

  createPostDataFromItem(item){
    let self = this
    let postData = {
      quantity:item.quantity,
      shopId:item.products[0].shopId,
    }

    if(item.productValuePackId!=null){//valuePack item
      postData.productValuePackId = item.productValuePackId
      postData.order_items = []
      item.products.forEach((product)=>{
        let productPostData = self._createPostDataProductItem(product)
        productPostData.quantity = 1
        postData.order_items.push(productPostData)
      })
    }else{//product item
      angular.extend(postData,this._createPostDataProductItem(item.products[0]))
    }



    return postData
  }

  _mapProductItemToDetailedProduct(product,productItem){
    let self = this
    product = angular.copy(product)
    //map variant
    let productVariant = self._$filter('filter')(product.productVariants, {id: productItem.productVariantId})[0]


    //map option
    let optionValues = product.productOptions.reduce((result,option)=>{
      result = result.concat(option.productOptionValues.map((optionValue)=>{
        let clonedOption = angular.copy(option)
        delete clonedOption.productOptionValues
        optionValue.option = clonedOption
        return optionValue
      }))
      return result
    },[])
    optionValues = this._$filter('filter')(optionValues, (optionValue)=>{
      return productItem.product_option_values.indexOf(optionValue.id) > -1
    })

    //calculate price
    let optionPrice = optionValues.reduce((result,optionValue)=>{
      return result += optionValue.price
    },0)

    let unitPrice = productVariant.price + optionPrice
    return {
      product,optionValues,productVariant,unitPrice
    }
  }

  getDetailedItems(){
    let self = this
    let deferred = this._$q.defer();
    this._Order.getCartsInfo({carts:this.getAllCart()}).$promise.then((result)=>{
      deferred.resolve(result)
    },(error)=>{
      deferred.reject(new Error("Cannot create order (multiple)"))
    })
    return deferred.promise
  }
  removeFromCart(shopId,index){
    /*item = this._$filter('filter')(this._localStorage.myCart[item.shopId].order_items, {$$hashkey: item.$$hashkey})[0]
    console.log("remove from cart")*/
    index>-1 && this._localStorage.myCart[shopId].order_items.splice(index,1)
    if(this._localStorage.myCart[shopId].order_items.length == 0){
      //delete cart
      delete this._localStorage.myCart[shopId]
    }
  }
  getCart(shopId){
    return getAllCart()[shopId]
  }
  getAllCart(){
    return this._localStorage.myCart
  }
  clearCart(shopId){
    delete this._localStorage.myCart[shopId]
  }
  clearAllCart(){
    Object.keys(this._localStorage.myCart).forEach((shopId)=>{
      this.clearCart(shopId)
    })
  }
  /* setDeliveryAddress(shopId,address){
    console.log("Set delivery address",address)
    this._localStorage.myCart[shopId].delivery_address = address
  }
  setAllCartDeliveryAddress(address){
    let self = this
    Object.keys(this._localStorage.myCart).forEach(function (shopId) {
      self.setDeliveryAddress(shopId,address)
    })
  }
  setDeliveryMethod(shopId,method){
    this._localStorage.myCart[shopId].delivery_method = method
  }*/
  setDeliveryLocation(address, skipPrompt){
    let self = this
    console.log('set delivery location')
    if(!skipPrompt){
      var confirmPopup = this._$ionicPopup.confirm({
        title: 'Change delivery location',
        template: 'You will lost all item in the cart, Do you want to continue?'
      });
      return confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
          self._localStorage.deliveryLocation = address
          self._localStorage.myCart = {}
        } else {
          console.log('You are not sure');
        }
        return self._localStorage.deliveryLocation
      });
    }else{
      self._localStorage.deliveryLocation = address
      self._localStorage.myCart = {}
      return Promise.resolve(self._localStorage.deliveryLocation)
    }
    
  }
  getDeliveryLocation(){
    return this._localStorage.deliveryLocation
  }
}

cartBuilder.$inject = ['$localStorage','$rootScope','Product','ProductValuePack','$filter','Shop','Delivery','Order','$q','$ionicPopup']

export default cartBuilder;
