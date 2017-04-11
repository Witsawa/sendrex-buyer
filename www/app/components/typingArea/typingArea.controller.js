class TypingAreaController {
  constructor(Customer,ConversationItem) {
    this.name = 'typingArea';
    this._ConversationItem = ConversationItem
    this.message = {
      message: ''
    }
    this.userId = Customer.getCurrentId()
  }
  sendMessage () {
    let self = this
    this.message.customerId = this.userId
    this.message.conversationId = this.conversation.id
    this._ConversationItem.create(this.message).$promise.then(function (message) {
      console.log(message)
      self.message = {
        message: ''
      }
    }, function (err) {
      console.log(err)
    })
  }
}
TypingAreaController.inject = ['Customer','ConversationItem']

export default TypingAreaController;
