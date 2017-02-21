import template from './productDetail.html';
import controller from './productDetail.controller';
import './productDetail.scss';

let productDetailComponent = {
  restrict: 'E',
  bindings: {
    product:'<'
  },
  template,
  controller
};

export default productDetailComponent;
