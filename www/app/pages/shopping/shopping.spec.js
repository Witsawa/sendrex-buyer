import ShoppingModule from './shopping'
import ShoppingController from './shopping.controller';
import ShoppingComponent from './shopping.component';
import ShoppingTemplate from './shopping.html';

describe('Shopping', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ShoppingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ShoppingController();
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
      expect(ShoppingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ShoppingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ShoppingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ShoppingController);
      });
  });
});
