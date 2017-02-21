class ShopListController {
  constructor($scope,Shop,$ionicLoading,BusinessCategory) {
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

  }
  fetchShop(onSuccess,onError,onFinally){
    let filter = {
      filter:{
        skip:this.page * 10,
        limit:10
      }
    }
    let self = this
    if(this.query != ''){
      filter.filter['where'] = {
        name:{
          like:'%'+this.query+'%'
        }
      }
    }
    if(this.category!=0){
      filter.filter.where? (filter.filter.where['businessCategoryId'] = this.category):filter.filter['where'] = {businessCategoryId:this.category}
    }
    console.log(filter)
    this._Shop.find(filter).$promise.then(function(shops){
      self.shops = self.shops.concat(shops)
      self.page += 1
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
    this.page = 0
    this.shops = []
    let self = this
    this.fetchShop(()=>{
      self.showLoadmore = true
    },()=>{

    },()=>{
      self._$scope.$broadcast('scroll.refreshComplete');
    })

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

ShopListController.$inject = ['$scope','Shop','$ionicLoading','BusinessCategory']

export default ShopListController;
