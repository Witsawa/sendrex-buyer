import template from './locationPicker.html';
import controller from './locationPicker.controller';
import './locationPicker.scss';

let locationPickerComponent = {
  restrict: 'E',
  bindings: {
    title:'@',
    ngModel:'=',
    ngChange:'&'
  },
  template,
  controller
};

export default locationPickerComponent;
