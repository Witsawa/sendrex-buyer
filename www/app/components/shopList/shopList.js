import shopListComponent from './shopList.component';

let shopListModule = angular.module('shopList', [
  'ionic'
])

.component('shopList', shopListComponent)

.name;

export default shopListModule;
