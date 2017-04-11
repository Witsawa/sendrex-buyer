import chatRoomComponent from './chatRoom.component';

let chatRoomModule = angular.module('chatRoom', [
  'ionic'
])

.component('chatRoom', chatRoomComponent)

.name;

export default chatRoomModule;
