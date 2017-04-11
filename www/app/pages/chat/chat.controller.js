class ChatController {
  constructor($scope,getConversationInfo) {
    this.name = 'chat';
    this.conversation = getConversationInfo
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
  }
  
}
ChatController.$inject = ['$scope','getConversationInfo']

export default ChatController;
