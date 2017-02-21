import deliveryLocationPickerComponent from './deliveryLocationPicker.component';

let deliveryLocationPickerModule = angular.module('deliveryLocationPicker', [
  'ionic'
])

.component('deliveryLocationPicker', deliveryLocationPickerComponent)

.name;

export default deliveryLocationPickerModule;
