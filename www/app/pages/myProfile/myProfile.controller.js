class MyProfileController {
  constructor(getUser,$rootScope,Customer) {
    this.name = 'myProfile';
    this.user = getUser
    this._$rootScope = $rootScope
    this._Customer = Customer
  }
  save(){
    this._$rootScope.$broadcast('loading:show');
    this._Customer.updateAttributes({id:this.user.id},this.user).$promise.then(()=>{

    }).finally(()=>{
      this._$rootScope.$broadcast('loading:hide');
    })
  }
}

MyProfileController.$inject = ["getUser","$rootScope",'Customer']

export default MyProfileController;
