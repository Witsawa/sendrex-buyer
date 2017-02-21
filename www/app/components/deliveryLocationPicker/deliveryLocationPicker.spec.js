import DeliveryLocationPickerModule from './deliveryLocationPicker'
import DeliveryLocationPickerController from './deliveryLocationPicker.controller';
import DeliveryLocationPickerComponent from './deliveryLocationPicker.component';
import DeliveryLocationPickerTemplate from './deliveryLocationPicker.html';

describe('DeliveryLocationPicker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DeliveryLocationPickerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DeliveryLocationPickerController();
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
      expect(DeliveryLocationPickerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DeliveryLocationPickerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DeliveryLocationPickerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DeliveryLocationPickerController);
      });
  });
});
