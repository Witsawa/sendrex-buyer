import checkoutFormComponent from './checkoutForm.component';

let checkoutFormModule = angular.module('checkoutForm', [
  'ionic'
])

.component('checkoutForm', checkoutFormComponent)

.name;

export default checkoutFormModule;
