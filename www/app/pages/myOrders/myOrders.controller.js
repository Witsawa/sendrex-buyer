class MyOrdersController {
  constructor(getOrders) {
    this.name = 'myOrders';
    this.orders = getOrders
    this.statusFilter = 'pending'
    console.log(this.orders)
  }
  cancelOrder(order){
    order.status = "cancel"
    order.$save()
  }
}

MyOrdersController.$inject = ['getOrders']

export default MyOrdersController;
