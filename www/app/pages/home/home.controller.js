class HomeController {
  constructor($state) {
    this.name = 'home';
    this._$state = $state
  }
  getStateUrl(stateName,params){
    return this._$state.href(stateName, params || {});
  }
}
HomeController.$inject = ['$state']
export default HomeController;
