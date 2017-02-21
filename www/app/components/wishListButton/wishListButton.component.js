import template from './wishListButton.html';
import controller from './wishListButton.controller';
import './wishListButton.scss';

let wishListButtonComponent = {
  restrict: 'E',
  bindings: {
    product:'<'
  },
  template,
  controller
};

export default wishListButtonComponent;
