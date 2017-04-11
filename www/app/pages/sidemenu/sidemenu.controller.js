class SidemenuController {
  constructor($ionicHistory,$ionicSideMenuDelegate,$localStorage,cartBuilder) {
    this.name = 'sidemenu';
    this._$ionicHistory = $ionicHistory
    this._$ionicSideMenuDelegate = $ionicSideMenuDelegate
    this._localStorage = $localStorage.$default({
      wishList:[]
    })
    this._CartBuilder = cartBuilder
  }
  goBack()
  {
    console.log('go back')
    console.log(this._$ionicHistory.backView())
    this._$ionicHistory.goBack();                           //This doesn't work
    //window.history.back();                          //This works
    //alert('code to go back called. Did it work?');  //For testing
  }
  toggleSidebar(){
    this._$ionicSideMenuDelegate.toggleRight()
  }
  wishListCount(){
    return this._localStorage.wishList.length
  }
  myCartCount(){
    return this._CartBuilder.count()
  }
}
SidemenuController.$inject = ['$ionicHistory','$ionicSideMenuDelegate','$localStorage','cartBuilder']

export default SidemenuController;
