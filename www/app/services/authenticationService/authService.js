/**
 * Created by nattaphatlaoharawee on 11/1/2016 AD.
 */
import LoginModalTemplate from './loginModal.html'
class authService{
  constructor($ionicPopup,$rootScope,$state) {
    this.name = 'authService';
    this._$ionicPopup = $ionicPopup
    this._$rootScope = $rootScope
    this._$state = $state
  }
  login(){
    let self = this
    var myPopup = this._$ionicPopup.confirm({
      title: 'Authentication required',
      subTitle: 'You will be send to login page'
    });
    myPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
       self._$state.go('login')
     } else {
       console.log('You are not sure');
     }
   });
    /*console.log('loggin in', this.loginModal)
    this.loginModal.scope.credential = {
      email: '',
      password: ''
    }
    this.loginModal.show()*/
  }
}

authService.$inject = ['$ionicPopup','$rootScope','$state']

export default authService;
