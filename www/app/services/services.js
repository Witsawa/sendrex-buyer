import CartService from './cartService/cartService'
import OmiseService from './omiseService'
import PubSub from './pubsub/index'
import AuthenticationServiceModule from './authenticationService'
console.log(PubSub)
let directivesModule = angular.module('services', [
  CartService,
  OmiseService,
  PubSub,
  AuthenticationServiceModule
])
  .name;

export default directivesModule;
