import myCartComponent from './myCart.component';

let myCartModule = angular.module('myCart', [
  'ionic'
])

.component('myCart', myCartComponent)

.name;

export default myCartModule;
