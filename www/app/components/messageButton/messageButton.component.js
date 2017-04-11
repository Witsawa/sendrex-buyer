import template from './messageButton.html';
import controller from './messageButton.controller';
import './messageButton.scss';

let messageButtonComponent = {
  restrict: 'E',
  bindings: {
    shop:'<'
  },
  template,
  controller
};

export default messageButtonComponent;
