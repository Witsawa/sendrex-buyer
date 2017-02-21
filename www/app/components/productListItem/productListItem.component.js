import template from './productListItem.html';
import controller from './productListItem.controller';
import './productListItem.scss';

let productListItemComponent = {
  restrict: 'E',
  bindings: {
    product:'<'
  },
  template,
  controller
};

export default productListItemComponent;
