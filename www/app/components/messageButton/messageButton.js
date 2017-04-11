import messageButtonComponent from './messageButton.component';

let messageButtonModule = angular.module('messageButton', [
  'ionic'
])

.component('messageButton', messageButtonComponent)

.name;

export default messageButtonModule;
