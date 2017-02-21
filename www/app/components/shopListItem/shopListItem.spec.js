import ShopListItemModule from './shopListItem'
import ShopListItemController from './shopListItem.controller';
import ShopListItemComponent from './shopListItem.component';
import ShopListItemTemplate from './shopListItem.html';

describe('ShopListItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ShopListItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ShopListItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ShopListItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ShopListItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ShopListItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ShopListItemController);
      });
  });
});
