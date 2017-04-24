class LogoutController {
  constructor(Customer,LoopBackAuth,$state) {
    this.name = 'logout';
    if(!Customer.isAuthenticated()){
      $state.go('home')
    }else {
      Customer.logout(function () {
        LoopBackAuth.clearUser();
        LoopBackAuth.clearStorage();
        console.log("Logged out")
        $state.go('sidemenu.home')
      },function(response){
        console.log("Log out failed")
        console.log(response)
      })
    }
  }
}
LogoutController.$inject = ['Customer','LoopBackAuth','$state']

export default LogoutController;
