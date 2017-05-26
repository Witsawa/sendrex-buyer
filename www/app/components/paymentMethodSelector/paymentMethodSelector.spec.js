import PaymentMethodSelectorModule from './paymentMethodSelector'
import PaymentMethodSelectorController from './paymentMethodSelector.controller';
import PaymentMethodSelectorComponent from './paymentMethodSelector.component';
import PaymentMethodSelectorTemplate from './paymentMethodSelector.html';

describe('PaymentMethodSelector', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PaymentMethodSelectorModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PaymentMethodSelectorController();
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
      expect(PaymentMethodSelectorTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PaymentMethodSelectorComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PaymentMethodSelectorTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PaymentMethodSelectorController);
      });
  });
});
