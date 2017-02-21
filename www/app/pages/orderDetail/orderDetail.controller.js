class OrderDetailController {
  constructor(getUser,Customer,Order,$stateParams) {
    this.name = 'orderDetail';
    this.user = getUser
    this._Customer = Customer
    this._Order = Order
    this._$stateParams = $stateParams
    this.fetchOrder()

  }
  cancelOrder(order){
    let self = this
    order.status = "cancel"
    order.$save().then((result)=>{
      self.fetchOrder()
    },(err)=>{
        //TODO error cancel order
    })

  }
  fetchOrder(){
    let self = this
    this._Customer.orders({
      id: this.user.id, filter: {
        where: {id: this._$stateParams.id},
        include: [
          'shop',
          {
            orderItems: [
              {
                product:['promotions']
              },
              'productVariant',
              {
                productValuePack:['promotions']
              },
              {
                productOptionValues:['productOption']
              },
              {
                orderItems: [
                  {
                    product:['promotions']
                  },
                  'productVariant',
                  {
                    productValuePack:['promotions']
                  },
                  {
                    productOptionValues:['productOption']
                  }

                ]
              }
            ]
          }
        ]
      }
    }).$promise.then((order)=>{
      self.order = order[0]
      console.log(order[0])
    },(error)=>{
      console.log(error)
      //TODO get order error
    })
  }

}

OrderDetailController.$inject = ['getUser','Customer','Order','$stateParams']

export default OrderDetailController;
