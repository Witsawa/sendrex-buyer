import template from './productList.html';
import controller from './productList.controller';
import './productList.scss';

let productListComponent = {
  restrict: 'E',
  bindings: {
    productDetailState:'@',
    shopId:'<'
  },
  template,
  controller
};

export default productListComponent;
