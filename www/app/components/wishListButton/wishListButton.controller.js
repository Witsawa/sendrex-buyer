class WishListButtonController {
  constructor($localStorage) {
    this.name = 'wishListButton';
    this._localStorage = $localStorage.$default({
      wishList:[]
    })
    console.log(this)
  }
  toggle(product){
    if(!this.alreadyInWishList(product)){
      this._localStorage.wishList.push(product.id)
    }else{
      let index = this._localStorage.wishList.indexOf(product.id);
      this._localStorage.wishList.splice(index, 1);
    }
  }
  alreadyInWishList(product){
    return this._localStorage.wishList.includes(product.id)
  }
}

WishListButtonController.$inject = ['$localStorage']

export default WishListButtonController;
