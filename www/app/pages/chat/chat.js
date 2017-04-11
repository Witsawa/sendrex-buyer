import chatPage from './chat.page';

let chatModule = angular.module('chat', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('sidemenu.chat', {
        url: '/chat/:id',
        views: {
          'sidemenu-content': {
            template: chatPage.template,
            controller: chatPage.controller,
            controllerAs: '$ctrl'
          }
        },
        resolve: {
          getConversationInfo: ['Conversation','$stateParams',function (Conversation,$stateParams) {
            return Conversation.findById({id:$stateParams.id,filter:{include:['shop','customer']}}).$promise
          }]
        }

      })
  })

.name;

export default chatModule;
