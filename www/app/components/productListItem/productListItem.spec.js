import ProductListItemModule from './productListItem'
import ProductListItemController from './productListItem.controller';
import ProductListItemComponent from './productListItem.component';
import ProductListItemTemplate from './productListItem.html';

describe('ProductListItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductListItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductListItemController();
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
      expect(ProductListItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProductListItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductListItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductListItemController);
      });
  });
});
