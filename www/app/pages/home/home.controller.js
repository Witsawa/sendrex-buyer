class HomeController {
  constructor($state,$ionicHistory) {
    this.name = 'home';
    this._$state = $state
    this._$ionicHistory = $ionicHistory
  }
  getStateUrl(stateName,params){
    return this._$state.href(stateName, params || {});
  }
  clearHistory() {
    console.log('clear history')
    this._$ionicHistory.clearHistory();
  }
}
HomeController.$inject = ['$state','$ionicHistory']
export default HomeController;
