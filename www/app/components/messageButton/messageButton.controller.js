class MessageButtonController {
  constructor(Conversation,Customer,$state) {
    this.name = 'messageButton';
    this._Conversation = Conversation
    this.userId = Customer.getCurrentId()
    this._$state = $state
  }
  goToChatroom() {
    let self = this
    //check if room exist
    //if not create one
    //then go to room id
    this._Conversation.upsertWithWhere({
      where:{
        shopId: this.shop.id,
        customerId: this.userId
      }
    },
    {
      shopId: this.shop.id,
      customerId: this.userId
    }).$promise.then(function (conversation) {
      console.log(conversation)
      self._$state.go('sidemenu.chat',{id:conversation.id})
    }, function (err) {
      console.log(err)
    })
  }
}
MessageButtonController.inject= ['Conversation','Customer','$state']

export default MessageButtonController;
