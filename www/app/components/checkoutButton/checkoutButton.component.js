import template from './checkoutButton.html';
import controller from './checkoutButton.controller';
import './checkoutButton.scss';

let checkoutButtonComponent = {
  restrict: 'E',
  bindings: {
    shopId:'<',
    condition:'&'
  },
  template,
  controller
};

export default checkoutButtonComponent;
