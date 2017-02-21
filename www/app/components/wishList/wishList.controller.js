class WishListController {
  constructor(Product,$localStorage,$ionicLoading,$state) {
    this.name = 'wishList';
    let self = this
    this._localStorage = $localStorage.$default({
      wishList:[]
    })
    this._$state = $state
    $ionicLoading.show()
    Product.find({
      filter:{
        where:{
          id:{
            inq:this._localStorage.wishList
          }
        },
        include:'shop'
      }
    }).$promise.then((products)=>{
      self.products = products
    }).finally(()=>{
      $ionicLoading.hide()
    })
  }
  viewProduct(id){
    this._$state.go('sidemenu.wishListProductDetail',{id:id})
  }
}
WishListController.$inject = ['Product','$localStorage','$ionicLoading','$state']
export default WishListController;
