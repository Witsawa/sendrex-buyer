import ServicesModule from './services'
import ServicesController from './services.controller';
import ServicesComponent from './services.component';
import ServicesTemplate from './services.html';

describe('Services', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ServicesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ServicesController();
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
      expect(ServicesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ServicesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ServicesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ServicesController);
      });
  });
});
