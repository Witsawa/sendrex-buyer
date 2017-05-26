class ShopListController {
  constructor($scope,Shop,$ionicLoading,BusinessCategory,cartBuilder) {
    let self = this
    this.name = 'shopList';this._$scope = $scope
    this._Shop = Shop
    this._BusinessCategory= BusinessCategory
    this._$ionicLoading = $ionicLoading
    this.showLoadmore = true
    self.categories = [{name:"All category",id:0}]
    BusinessCategory.find({}).$promise.then(function(categories){
      self.categories = self.categories.concat(categories)
    })
    this.category = 0;
    this.shops = [];
    this.query = '';
    this.page = 0;
    this._cartBuilder =cartBuilder
    $scope.$watch(function () {
      return self._cartBuilder.getDeliveryLocation()
    }, function (newVal) {
      console.log("New location", newVal)
      self.refresh()
    })

  }
  fetchShop(onSuccess,onError,onFinally,clearData = false){
    let filter = {
      filter:{
        skip:this.page * 10,
        limit:10,
        where: {}
      }
    }
    let self = this
    if(this._cartBuilder.getDeliveryLocation().geolocation){
      filter.filter['where']['location_geolocation'] = {
        near: this._cartBuilder.getDeliveryLocation().geolocation,
        maxDistance: 10,
        unit: 'kilometers'
      }
    }
    if(this.query != ''){
      filter.filter['where']['name'] = {
          ilike:'%'+this.query+'%'
        }
    }
    if(this.category!=0){ 
      filter.filter.where? (filter.filter.where['businessCategoryId'] = this.category):filter.filter['where'] = {businessCategoryId:this.category}
    }
    console.log(filter)
    this._Shop.find(filter).$promise.then(function(shops){
      if(clearData){
        self.page = 0
        self.shops = []
      }else{
        self.shops = self.shops.concat(shops)
        self.page += 1
      }
      onSuccess(shops)
    },function(){
      onError()
    }).finally(function(){
      console.log("Load finished")
      onFinally()
    })
  }

  refresh(){
    //reset page
    //clear product list
    let self = this
    this.fetchShop(()=>{
      self.showLoadmore = true
    },()=>{

    },()=>{
      self._$scope.$broadcast('scroll.refreshComplete');
    }, true)

  }
  search(query){
    //reset page
    //clear product list
    //set query terms
    //show load more
    this._$ionicLoading.show()
    this.query = query
    this.page = 0
    this.shops = []
    let self = this
    this.fetchShop(()=>{
      self.showLoadmore = true
    },()=>{

    },()=>{
      self._$ionicLoading.hide()
    })

  }
  loadMore(){
    //load next page
    let self = this
    this.fetchShop((shops)=>{
      if(shops.length==0){
        self.showLoadmore = false
      }
    },()=>{

    },()=>{
      self._$scope.$broadcast('scroll.infiniteScrollComplete');
    })

  }
  filterChange(value){
    this.category = value
    this.refresh()
  }
}

ShopListController.$inject = ['$scope','Shop','$ionicLoading','BusinessCategory','cartBuilder']

export default ShopListController;
