class ProductDetailController {

  constructor($filter,$scope) {
    this.name = 'productDetail';
    this._$filter = $filter
    $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
      // data.slider is the instance of Swiper
      $scope.slider = data.slider;
    });
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
ProductDetailController.$inject = ['$filter','$scope']

export default ProductDetailController;
