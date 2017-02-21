import CartService from './cartService/cartService'
import OmiseService from './omiseService'
let directivesModule = angular.module('directives', [
  CartService,
  OmiseService
])
  .name;

export default directivesModule;
