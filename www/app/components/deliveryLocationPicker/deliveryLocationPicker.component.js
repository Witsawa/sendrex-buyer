import template from './deliveryLocationPicker.html';
import controller from './deliveryLocationPicker.controller';
import './deliveryLocationPicker.scss';

let deliveryLocationPickerComponent = {
  restrict: 'E',
  bindings: {
    shopId:'=',
    addressChange:'&'
  },
  template,
  controller
};

export default deliveryLocationPickerComponent;
