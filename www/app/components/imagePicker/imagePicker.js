import imagePickerComponent from './imagePicker.component';

let imagePickerModule = angular.module('imagePicker', [
  'ionic'
])

.component('imagePicker', imagePickerComponent)

.name;

export default imagePickerModule;
