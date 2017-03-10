import template from './myCartProductList.html';
import controller from './myCartProductList.controller';
import './myCartProductList.scss';

let myCartProductListComponent = {
  restrict: 'E',
  bindings: {
    checkout:'&'
  },
  template,
  controller
};

export default myCartProductListComponent;
