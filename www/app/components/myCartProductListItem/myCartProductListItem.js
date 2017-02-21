import myCartProductListItemComponent from './myCartProductListItem.component';

let myCartProductListItemModule = angular.module('myCartProductListItem', [
  'ionic'
])

.component('myCartProductListItem', myCartProductListItemComponent)

.name;

export default myCartProductListItemModule;
