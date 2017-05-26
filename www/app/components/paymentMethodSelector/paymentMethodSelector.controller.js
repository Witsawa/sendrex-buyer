class PaymentMethodSelectorController {
  constructor(PaymentMethod) {
    this.name = 'paymentMethodSelector';
    this._PaymentMethod = PaymentMethod
    this.paymentMethods = []
    this.fetchMethods()
  }
  fetchMethods  () {
    let self = this
    this._PaymentMethod.find().$promise.then(function (methods) {
      console.log(methods)
      self.paymentMethods = methods
    })
  }
}
PaymentMethodSelectorController.$inject = ['PaymentMethod']
export default PaymentMethodSelectorController;
