import template from './myCartProductListItem.html';
import controller from './myCartProductListItem.controller';
import './myCartProductListItem.scss';

let myCartProductListItemComponent = {
  restrict: 'E',
  bindings: {
    item:"=",
    currency:"=",
    removeFromCart:'&'
  },
  template,
  controller
};

export default myCartProductListItemComponent;
