class ProductDetailController {
  constructor($scope,getProduct,$filter) {
    this.name = 'productDetail';
    this.product = getProduct

  }
}

ProductDetailController.$inject = ['$scope','getProduct','$filter']

export default ProductDetailController;
