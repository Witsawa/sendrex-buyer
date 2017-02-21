import template from './addToCartButton.html';
import controller from './addToCartButton.controller';
import './addToCartButton.scss';

let addToCartButtonComponent = {
  restrict: 'E',
  bindings: {
    product:'<'
  },
  template,
  controller
};

export default addToCartButtonComponent;
