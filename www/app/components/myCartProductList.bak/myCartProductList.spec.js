import MyCartProductListModule from './myCartProductList'
import MyCartProductListController from './myCartProductList.controller';
import MyCartProductListComponent from './myCartProductList.component';
import MyCartProductListTemplate from './myCartProductList.html';

describe('MyCartProductList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyCartProductListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyCartProductListController();
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
      expect(MyCartProductListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyCartProductListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyCartProductListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyCartProductListController);
      });
  });
});
