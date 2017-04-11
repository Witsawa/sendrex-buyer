import followButtonComponent from './followButton.component';

let followButtonModule = angular.module('followButton', [
  'ionic'
])

.component('followButton', followButtonComponent)

.name;

export default followButtonModule;
