import MyOrdersModule from './myOrders'
import MyOrdersController from './myOrders.controller';
import MyOrdersComponent from './myOrders.component';
import MyOrdersTemplate from './myOrders.html';

describe('MyOrders', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyOrdersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyOrdersController();
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
      expect(MyOrdersTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyOrdersComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyOrdersTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyOrdersController);
      });
  });
});
