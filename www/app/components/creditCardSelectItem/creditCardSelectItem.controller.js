import creditCardSelectModal from './creditCardSelectModal.html'
class CreditCardSelectItemController {
  constructor(Customer,$q,OmiseCustomer,$ionicModal,$scope) {
    let self = this
    this.name = 'creditCardSelectItem';
    this._Customer = Customer
    this._$q = $q
    this._OmiseCustomer = OmiseCustomer
    this.ngModel = this.ngModel || 0
    self.modal = $ionicModal.fromTemplate(creditCardSelectModal,{
      scope:$scope
    })
    this.fetchUserInfo().then(function () {
      self.fetchCreditCard()
    })

  }
  fetchUserInfo () {
    let self = this
    return self._Customer.getCurrent().$promise.then(function (user) {
      self.user = user
      return self._$q.resolve(user)
    }, function (err){
      return self._$q.reject(err)
    })
  }
  fetchCreditCard () {
    if(this.user.omise_token){
      this._OmiseCustomer.get({id:this.user.omise_token}).$promise.then(function (rsp) {
        console.log(rsp)
      }, function (err) {
        console.log(err)
      })
    }
  }
  openPicker() {
    this.modal.show()
  }
  done() {
    this.modal.hide() 
  }
  editCard() {

  }
}
CreditCardSelectItemController.$inject = ['Customer','$q','OmiseCustomer','$ionicModal','$scope']
export default CreditCardSelectItemController;
