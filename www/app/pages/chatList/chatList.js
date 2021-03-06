import chatListPage from './chatList.page';

let chatListModule = angular.module('chatList', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.chatList', {
        url: '/chatList',
        views: {
          'sidemenu-content': {
            template:chatListPage.template,
            controller:chatListPage.controller,
            controllerAs:'$ctrl'
          }
        }

      });
  })

.name;

export default chatListModule;
