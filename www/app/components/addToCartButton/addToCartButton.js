import addToCartButtonComponent from './addToCartButton.component';

let addToCartButtonModule = angular.module('addToCartButton', [
  'ionic',
  'ionic.wizard'
])

.component('addToCartButton', addToCartButtonComponent)

.name;

export default addToCartButtonModule;
