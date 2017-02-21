import template from './shopListItem.html';
import controller from './shopListItem.controller';
import './shopListItem.scss';

let shopListItemComponent = {
  restrict: 'E',
  bindings: {
    shop:"<"
  },
  template,
  controller
};

export default shopListItemComponent;
