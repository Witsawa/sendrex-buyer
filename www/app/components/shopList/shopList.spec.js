import ShopListModule from './shopList'
import ShopListController from './shopList.controller';
import ShopListComponent from './shopList.component';
import ShopListTemplate from './shopList.html';

describe('ShopList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ShopListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ShopListController();
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
      expect(ShopListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ShopListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ShopListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ShopListController);
      });
  });
});
