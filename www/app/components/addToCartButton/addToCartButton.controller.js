import template from './addToCartModalTemplate.html'
import valuePackModalTemplate from './valuePackModalTemplate.html'
class AddToCartButtonController {
  constructor($localStorage,$ionicModal,$scope,$filter,Product,cartBuilder,$rootScope) {
    this.name = 'addToCartButton';
    let self = this
    this._$scope = $scope
    this._$ionicModal = $ionicModal
    this._$filter = $filter
    this._Product = Product
    this.addToCartModal = {}
    this.valuePackModal = {}
    this.products = [this.product]
    this.valuePackId = undefined
    this._cartBuilder = cartBuilder
    this._$rootScope = $rootScope

  }
  showValuePackModal(valuePacks){
    if(this.valuePackModal.remove != undefined) {
      this.valuePackModal.remove();
    }
    this.valuePackModal = this._$ionicModal.fromTemplate(valuePackModalTemplate,{scope:this._$scope})
    this.valuePackModal.scope.valuePacks = valuePacks
    this.valuePackModal.show()
  }

  clickHandler(){
    let self = this
    this._Product.productValuePacks({
      id:this.product.id,
      filter:{
        include:[
          {products:[
            'productVariants',
            {productOptions:['productOptionValues']}
          ]},
          "promotions"
        ]
      }
    }).$promise.then((valuePacks)=>{
      console.log(valuePacks)
      if(valuePacks.length){
        self.showValuePackModal(valuePacks)
      }else{
        self.showAddToCartModal(this.product)
      }
    },()=>{
      //TODO error getting value pack
    })
  }
  showAddToCartModal(product,valuePack){
    let self = this
    if(this.addToCartModal.remove != undefined) {
      this.addToCartModal.remove();
    }
    /*if(!this.product.enableVariants){
      this._$scope.item.productVariantId = this.product.productVariants[0].id
    }*/
    this.addToCartModal = this._$ionicModal.fromTemplate(template,{scope:this._$scope})
    this.addToCartModal.scope.swiperOptions = {pagination: false}
    this.addToCartModal.scope.item = this._cartBuilder.newCartItem(product,valuePack)
    this.addToCartModal.scope.totalPrice = valuePack?valuePack.price:0
    this._$scope.$watch(()=>{return self.addToCartModal.scope.item},(newVal)=>{
      let totalPrice = valuePack?valuePack.price:0
      newVal.products.forEach((product)=>{
        let productVariant = self._$filter('filter')(product.productVariants,{id:product.selectedProductVariantId})[0]
        console.log(productVariant)
        let options = product.productOptions || []
        let optionPrice = options.reduce((result,option)=>{
          let optionValuePrice = option.productOptionValues.reduce((result2,optionValue)=>{
            if(optionValue.checked) {
              result2 += optionValue.price
            }
            return result2
          },0)
          result += optionValuePrice
          return result
        },0)
        totalPrice += productVariant.price + optionPrice - (valuePack?product.productVariants[0].price:0)
      })
      this.addToCartModal.scope.totalPrice = totalPrice
      if(product){
        this.addToCartModal.scope.promotions = product.promotions
      }
      if(valuePack){
        this.addToCartModal.scope.promotions = valuePack.promotions
      }


    },true)
    this.addToCartModal.show()
    if(this.addToCartModal.scope.item.products.length == 1 && (!this.addToCartModal.scope.item.products[0].enableVariants && !this.addToCartModal.scope.item.products[0].enableOptions)){
      this._$rootScope.$broadcast('wizard:IndexChanged',0,1)
    }
  }


  addToCartButtonHandler(item){
    console.log(item)
    let postData = this._cartBuilder.createPostDataFromItem(item)
    console.log(postData)
    this.addToCart(postData)
  }

  addToCart(item){
    this._cartBuilder.addToCart(item)
    this.addToCartModal.hide()

  }

  onOptionSelected(option,targetOptionValue){
    if(!option.multiple_select){
      option.productOptionValues.forEach((optionValue)=>{
        if(optionValue.id != targetOptionValue.id){
          optionValue.checked = false
        }
      })
    }
  }
  validateProduct(product){
    return this._cartBuilder.validateProduct(product)
  }
  validateItem(item){
    return this._cartBuilder.validateItem(item)
  }

  selectValuePack(valuePack){
    this.valuePackModal.hide()
    console.log("value pack selected",valuePack)
    this.products = valuePack.products
    this.valuePackId = valuePack.id
    this.showAddToCartModal(null,valuePack)
  }

}
AddToCartButtonController.$inject = ['$localStorage','$ionicModal','$scope','$filter','Product','cartBuilder','$rootScope']
export default AddToCartButtonController;
