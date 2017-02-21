import checkoutButtonComponent from './checkoutButton.component';

let checkoutButtonModule = angular.module('checkoutButton', [
  'ionic'
])

.component('checkoutButton', checkoutButtonComponent)

.name;

export default checkoutButtonModule;
