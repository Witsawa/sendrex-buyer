import creditCardSelectModal from './creditCardSelectModal.html'
import creditCardEditModal from './creditCardEditModal.html'
class CreditCardSelectItemController {
  constructor(Customer,$q,Omise,$ionicModal,$scope,$http) {
    let self = this
    this.name = 'creditCardSelectItem';
    this._Customer = Customer
    this._$q = $q
    this._Omise = Omise
    this.cardIndex = 0
    self.modal = $ionicModal.fromTemplate(creditCardSelectModal,{
      scope:$scope
    })
     self.editModal = $ionicModal.fromTemplate(creditCardEditModal,{
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
      console.log(self.user)
      return self._$q.resolve(user)
    }, function (err){
      return self._$q.reject(err)
    })
  }
  fetchCreditCard () {
    let self = this
    if(this.user.omise_token){
      this._Customer.prototype$getCard({id:this.user.id}).$promise.then(function (rsp) {
        console.log(rsp)
        self.cards = rsp
        self.ngModel = self.cards[self.cardIndex]
      }, function (err) {
        console.log(err)
      })
    }
  }
  openPicker() {
    this.modal.show()
  }
  done() {
    if(this.cards.length > 0){
      this.ngModel = this.cards[this.cardIndex]
    }else{
      this.ngModel = undefined
    }
    this.modal.hide() 
  }
  edit(card) {
    let name = ""
    if(this.user.firstname && this.user.lastname) {
      name = this.user.firstname + ' ' + this.user.lastname
    }

    card = card || {name: name, number: '', expiration_month: '', expiration_year: '', security_code:'', city: 'Bangkok',postal_code:''}  
    this.editModal.scope.card = card
    this.editModal.show()
  }
  saveCard(card) {
    let self = this
    console.log(card)
    this._Omise.getToken({card}).$promise.then(function (rsp) {
      console.log(rsp)
      self._Customer.prototype$addCard({id:self.user.id},{card_token:rsp.id}).$promise.then(function (user) {
        console.log("Save card success")
        self.fetchCreditCard()
        self.editModal.hide()
      }, function (err) {
        console.log(err)
      })
    }, function (err) {
      console.log(err)
    })

  }
  showActions(card){
    let self = this
    var hideSheet = self._$ionicActionSheet.show({
      buttons: [
        { text: 'Edit' }
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        if(index == 0){
          self.edit(card)
        }
        return true;
      },
      destructiveButtonClicked:function(){
        self._Customer.prototype$removeCard()
      }
    })
  }
}
CreditCardSelectItemController.$inject = ['Customer','$q','Omise','$ionicModal','$scope']
export default CreditCardSelectItemController;
