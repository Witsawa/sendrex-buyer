import MyCartModule from './myCart'
import MyCartController from './myCart.controller';
import MyCartComponent from './myCart.component';
import MyCartTemplate from './myCart.html';

describe('MyCart', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyCartModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyCartController();
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
      expect(MyCartTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyCartComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyCartTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyCartController);
      });
  });
});
