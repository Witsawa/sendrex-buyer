import CartBuilder from './cartBuilder'
let cartServiceModule = angular.module('cartService', [])
  .service('cartBuilder',CartBuilder)
  .name;
export default cartServiceModule;
