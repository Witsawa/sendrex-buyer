class MyOrdersController {
  constructor(getCurrentUser,Customer,$scope) {
    this.name = 'myOrders'
    this.statusFilter = 'pending'
    this.user = getCurrentUser
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
    this._Customer.orders({id:this.user.id,filter:{
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

MyOrdersController.$inject = ['getCurrentUser','Customer','$scope']

export default MyOrdersController;
