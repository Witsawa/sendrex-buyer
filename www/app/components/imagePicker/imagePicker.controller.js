class ImagePickerController {
  constructor($cordovaCamera,$ionicPlatform,$ionicActionSheet) {
    this.name = 'imagePicker';
    this._$cordovaCamera = $cordovaCamera
    this._$ionicPlatform = $ionicPlatform
    this._$ionicActionSheet = $ionicActionSheet
  }
  showAction(){
    let self = this
    var hideSheet = this._$ionicActionSheet.show({
      buttons: [
        { text: 'Camera' },
        { text: 'Gallery' }
      ],
      titleText: 'Pick image',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        let mode = Camera.PictureSourceType.CAMERA
        switch(index){
          case 0:
            mode = Camera.PictureSourceType.CAMERA
            break;
          case 1:
            mode = Camera.PictureSourceType.PHOTOLIBRARY

        }
        self.getPicture(mode)
        return true;
      }
    });

  }
  getPicture(mode){
    let self =this
    self._$ionicPlatform.ready(function() {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: mode,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      self._$cordovaCamera.getPicture(options).then(function(imageData) {

        self.ngModel = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
    });
  }
}

ImagePickerController.$inject = ['$cordovaCamera','$ionicPlatform','$ionicActionSheet']

export default ImagePickerController;
