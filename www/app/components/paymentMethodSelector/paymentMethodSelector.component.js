import template from './paymentMethodSelector.html';
import controller from './paymentMethodSelector.controller';
import './paymentMethodSelector.scss';

let paymentMethodSelectorComponent = {
  restrict: 'E',
  bindings: {
    shop:"<",
    ngModel:"="
  },
  template,
  controller
};

export default paymentMethodSelectorComponent;
