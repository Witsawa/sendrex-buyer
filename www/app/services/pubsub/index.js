import SocketService from './socket'
import PubSub from './pubsub'
let servicesModule = angular.module('MyPubSub', ['lbServices'])
.factory('socket', SocketService)
.factory('PubSub', PubSub)
.name;

export default servicesModule;
