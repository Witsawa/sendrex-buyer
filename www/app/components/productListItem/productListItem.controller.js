class ProductListItemController {
  constructor($filter) {
    this.name = 'productListItem';
    this._$filter = $filter;
  }
  isFreeShipping(){
    let self = this
    let shop = self.product.shop
    let delivery = self._$filter('filter')(shop._delivery_methods, (method)=>{return method.name == 'Delivery'})
    if(delivery){
      delivery = delivery[0]
      let freeShipping = self._$filter('filter')(delivery._conditions, (condition)=>{return method.fee == 0})
      if(freeShipping){
        return true
      }
    }
    return false
  }
}
ProductListItemController.$inject = ['$filter']

export default ProductListItemController;
