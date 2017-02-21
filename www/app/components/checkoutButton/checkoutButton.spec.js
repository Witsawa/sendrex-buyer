import CheckoutButtonModule from './checkoutButton'
import CheckoutButtonController from './checkoutButton.controller';
import CheckoutButtonComponent from './checkoutButton.component';
import CheckoutButtonTemplate from './checkoutButton.html';

describe('CheckoutButton', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CheckoutButtonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CheckoutButtonController();
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
      expect(CheckoutButtonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CheckoutButtonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CheckoutButtonTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CheckoutButtonController);
      });
  });
});
