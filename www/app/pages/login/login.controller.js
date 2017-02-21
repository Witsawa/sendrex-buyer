import logo from './../../../img/logo.jpg'
class LoginController {
  constructor(Customer,$location) {
    this.name = 'login';
    this.logo = logo
    this._Customer = Customer
    this.credential = {}
    this._$location = $location
  }
  login(){
    let self = this
    this._Customer.login(this.credential, function() {
      let next = self._$location.nextAfterLogin || '/sidemenu/home/shopping';
      self._$location.nextAfterLogin = null;
      self._$location.path(next);
    });
  }
}

LoginController.$inject = ['Customer','$location']
export default LoginController;
