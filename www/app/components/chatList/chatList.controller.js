class ChatListController {
  constructor(Conversation,Customer) {
    this.name = 'chatList';
    this._Conversation = Conversation
    this.conversations = []
    this.userId = Customer.getCurrentId()
    this.fetchData()
  }
  fetchData () {
    let self = this
    this._Conversation.find({
      filter:{
        where: {
          customerId: self.userId
        },
        include: [{
          relation: 'conversationItems',
          scope: {
            limit:1,
            order: 'created DESC'
          }
        },
        {
          relation: 'shop'
        }]
      }
    }).$promise.then(function (conversations) {
      self.conversations = conversations
    }, function (err) {
      console.log(err)
    })
  }
}
ChatListController.inject = ['Conversation','Customer']
export default ChatListController;
