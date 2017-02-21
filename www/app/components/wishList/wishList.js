import wishListComponent from './wishList.component';

let wishListModule = angular.module('wishList', [
  'ionic'
])

.component('wishList', wishListComponent)

.name;

export default wishListModule;
