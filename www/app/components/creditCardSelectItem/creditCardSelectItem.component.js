import template from './creditCardSelectItem.html';
import controller from './creditCardSelectItem.controller';
import './creditCardSelectItem.scss';

let creditCardSelectItemComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"="
  },
  template,
  controller
};

export default creditCardSelectItemComponent;
