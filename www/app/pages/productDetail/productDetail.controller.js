class ProductDetailController {
  constructor($scope,getProduct,$filter) {
    this.name = 'productDetail';
    this.product = getProduct
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
  }
}

ProductDetailController.$inject = ['$scope','getProduct','$filter']

export default ProductDetailController;
