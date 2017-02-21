import productDetailComponent from './productDetail.component';

let productDetailModule = angular.module('productDetail', [
  'ionic'
])

.component('productDetail', productDetailComponent)

.name;

export default productDetailModule;
