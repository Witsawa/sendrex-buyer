import shopListItemComponent from './shopListItem.component';

let shopListItemModule = angular.module('shopListItem', [
  'ionic'
])

.component('shopListItem', shopListItemComponent)

.name;

export default shopListItemModule;
