class MyOrdersController {
  constructor(Customer,$scope) {
    this.name = 'myOrders'
    this.statusFilter = 'pending'
    this.userId = Customer.getCurrentId()
    this._Customer = Customer
    this._$scope = $scope
    this.orders = []
    this.fetchOrders()
  }
  cancelOrder(order){
    order.status = "cancel"
    order.$save()
  }
  fetchOrders(){
    let self = this
    this._Customer.orders({id:this.userId,filter:{
      include:[
        'shop',
        {orderItems:[
          'product',
          'productValuePack'
        ]}
      ]
    }}).$promise.then(function (orders) {
      self.orders = orders
    },function (err) {
      console.log(err)
    }).finally(function () {
      self._$scope.$broadcast('scroll.refreshComplete');
    })
  }
}

MyOrdersController.$inject = ['Customer','$scope']

export default MyOrdersController;
