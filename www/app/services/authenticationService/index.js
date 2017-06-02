import angular from 'angular';
import authServiceClass from './authService';
let AuthenticationServiceModule = angular.module('AuthenticationServiceModule', [])
.service('AuthenticationService',authServiceClass)
.name
export default AuthenticationServiceModule;