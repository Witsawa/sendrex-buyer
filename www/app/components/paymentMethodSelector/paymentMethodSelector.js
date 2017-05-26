import paymentMethodSelectorComponent from './paymentMethodSelector.component';

let paymentMethodSelectorModule = angular.module('paymentMethodSelector', [
  'ionic'
])

.component('paymentMethodSelector', paymentMethodSelectorComponent)

.name;

export default paymentMethodSelectorModule;
