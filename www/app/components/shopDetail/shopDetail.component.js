import template from './shopDetail.html';
import controller from './shopDetail.controller';
import './shopDetail.scss';

let shopDetailComponent = {
  restrict: 'E',
  bindings: {
    shop:'<'
  },
  template,
  controller
};

export default shopDetailComponent;
