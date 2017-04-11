import CartService from './cartService/cartService'
import OmiseService from './omiseService'
import PubSub from './pubsub/index'
console.log(PubSub)
let directivesModule = angular.module('directives', [
  CartService,
  OmiseService,
  PubSub
])
  .name;

export default directivesModule;
