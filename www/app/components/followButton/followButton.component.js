import template from './followButton.html';
import controller from './followButton.controller';
import './followButton.scss';

let followButtonComponent = {
  restrict: 'E',
  bindings: {
    shop:'<'
  },
  template,
  controller
};

export default followButtonComponent;
