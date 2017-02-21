import CheckoutFormModule from './checkoutForm'
import CheckoutFormController from './checkoutForm.controller';
import CheckoutFormComponent from './checkoutForm.component';
import CheckoutFormTemplate from './checkoutForm.html';

describe('CheckoutForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CheckoutFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CheckoutFormController();
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
      expect(CheckoutFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CheckoutFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CheckoutFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CheckoutFormController);
      });
  });
});
