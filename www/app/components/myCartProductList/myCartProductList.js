import myCartProductListComponent from './myCartProductList.component';

let myCartProductListModule = angular.module('myCartProductList', [
  'ionic'
])

.component('myCartProductList', myCartProductListComponent)

.name;

export default myCartProductListModule;
