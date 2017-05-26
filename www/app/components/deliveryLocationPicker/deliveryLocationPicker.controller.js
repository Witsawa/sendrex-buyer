import DeliveryLocationPickerModal from './deliveryLocationPickerModal.html'
import EditDeliveryLocationModal from './editDeliveryLocationModal.html'
class DeliveryLocationPickerController {
  constructor($ionicModal,$scope,Customer,$rootScope,$ionicPopup,$timeout,$ionicActionSheet,cartBuilder,Delivery) {
    this.name = 'deliveryLocationPicker';
    let self  = this
    self._Customer = Customer
    self._$scope = $scope
    self._$ionicModal = $ionicModal
    self._$rootScope = $rootScope
    self._$ionicPopup = $ionicPopup
    self._$ionicActionSheet = $ionicActionSheet
    this._cartBuilder = cartBuilder
    this._Delivery = Delivery

    this.deliveryLocation = this._cartBuilder.getDeliveryLocation()
    self.modal = $ionicModal.fromTemplate(DeliveryLocationPickerModal,{
      scope:$scope
    })
    self.locations = []
    
    
    self.locationIndex = -1

    //Get current position
    console.log('getting current position')
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
      let geolocation = {
        lat:position.coords.latitude,
        lng:position.coords.longitude
      }
      var geocoder = new google.maps.Geocoder()
      geocoder.geocode({'location':geolocation},function(results,status){
        console.log(results)
        if (status === 'OK') {
          self.currentLocation = {
            geolocation,
            formatted_address: results[0].formatted_address
          }
          if(!self.deliveryLocation.geolocation){
            self._cartBuilder.setDeliveryLocation(self.currentLocation,true).then(function (newAddress) {
              console.log(newAddress)
              $timeout(()=>{
                self.deliveryLocation = newAddress
              })
            })
          }
        }
      })
    }, (err)=>{
      console.log(err)
    },{timeout: 30000, enableHighAccuracy: true, maximumAge: 75000})

  }
  fetchUserInfo(){
    let self = this
    let user = self._Customer.getCurrent()
    self.user = user
  }
  openModal(){
    let self = this
    console.log('Open modal')
    if(self._Customer.isAuthenticated()){
      self.fetchUserInfo()
    }
    this.modal.show()
  }
  edit(location){
    let self = this
    self.editIndex = self.user?self.user.delivery_locations.indexOf(location):-1
    if(!location){
      self.editIndex = -1
      location = {
        name:"Untitle",
        address: {
          geolocation:{
            lat:0,
            lng:0
          },
          formatted_address:""
        }
      }
    }
    self.editLocation = location
    self.editModal = self._$ionicModal.fromTemplate(EditDeliveryLocationModal,{
      scope:self._$scope
    })
    
    self.editModal.show()

  }
  saveDeliveryLocation(){
    //save editLocation

    let self = this
    let index = self.editIndex
    console.log(index)
    if(self.user){
      if(index != -1){
        self.user.delivery_locations[index] = self.editLocation
        
      }else{
        self.user.delivery_locations.push(self.editLocation)
      }
      this.saveUserProfile()
    }else{
      self.locationIndex = -1
      self.currentLocation = self.editLocation.address
      if(self.editModal){
        self.editModal.remove()
      }
      self.done()
    }
    
  }
  saveUserProfile(){
    //call api to save
    let self = this
    this._$rootScope.$broadcast('loading:show');
    this._Customer.updateAttributes({id:this.user.id},this.user).$promise.then(()=>{
      if(self.editModal){
        self.editModal.remove()
      }
      self.fetchUserInfo()
    }).finally(()=>{
      this._$rootScope.$broadcast('loading:hide');
    })
  }
  done(){
    let self = this
   
   let address = undefined
   if(self.locationIndex == -1){
     if(!self.currentLocation){
       console.log("Please select location")
       return
     }else{
        address = self.currentLocation
     }
     
   }else{
     address = self.user.delivery_locations[self.locationIndex].address

   }
   this._cartBuilder.setDeliveryLocation(address).then(function (newAddress) {
      self.deliveryLocation = newAddress
   })
   //this._cartBuilder.setAllCartDeliveryAddress(this.deliveryLocation)
   self.modal.hide()
   /*if(address){
     var confirmPopup = self._$ionicPopup.confirm({
      title: 'Change destination',
      template: 'Apply changing destination to all carts?',
      cancelText: 'No'
    });
    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
      Object.keys(self._cartBuilder.getAllCart()).forEach((shopId)=>{
        self._cartBuilder.setDeliveryAddress(shopId,address)
      })
      } else {
        self._cartBuilder.setDeliveryAddress(self.shopId,address)
        console.log('You are not sure');
      }
    }).finally(()=>{
      console.log(self)
      self.addressChange()
      self.modal.hide()
      
    });
   }else{
     console.log("Please select location")
   }*/
  }
  showActions(location){
    //show edit or delete
    let self = this
    var hideSheet = self._$ionicActionSheet.show({
      buttons: [
        { text: 'Edit' }
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        if(index == 0){
          self.edit(location)
        }
        return true;
      },
      destructiveButtonClicked:function(){
        self.user.delivery_locations.splice(self.user.delivery_locations.indexOf(location))
        self.saveUserProfile()
      }
    });

  }
}

DeliveryLocationPickerController.$inject = ["$ionicModal",'$scope','Customer','$rootScope','$ionicPopup','$timeout','$ionicActionSheet','cartBuilder','Delivery']

export default DeliveryLocationPickerController;
