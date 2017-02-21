import productListItemComponent from './productListItem.component';

let productListItemModule = angular.module('productListItem', [
  'ionic'
])

.component('productListItem', productListItemComponent)

.name;

export default productListItemModule;
