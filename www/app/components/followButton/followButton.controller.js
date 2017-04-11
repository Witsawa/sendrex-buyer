class FollowButtonController {
  constructor(Follow,Customer) {
    this.name = 'followButton';
    this._Follow = Follow
    this.userId = Customer.getCurrentId()
    this.followers = []
    this.fetchData()
  }
  fetchData() {
    let self = this
    self._Follow.find({where:{customerId:this.userId, shopId:this.shop.id}}).$promise.then(function (followers) {
      self.followers = followers
    }, function (err) {
      console.log(err)
    })
  }
  isFollowing () {
    let self = this
    let isFollowing = this.followers.length > 0
    return isFollowing
  }
  toggleFollow() {
    let self = this
    if(self.isFollowing()){
      console.log('unfollow')
      self._Follow.deleteById({
        id:self.followers[0].id
      }).$promise.then(function (follow) {
        console.log(follow)
        self.fetchData()
      }, function (err) {
        console.log(err)
      })
    }else {
      console.log('follow')
      self._Follow.create({
        customerId: this.userId,
        shopId: this.shop.id
      }).$promise.then(function (follow) {
        console.log(follow)
        self.fetchData()
      }, function (err) {
        console.log(err)
      })
    }
  }
}
FollowButtonController.$inject = ['Follow','Customer']

export default FollowButtonController;
