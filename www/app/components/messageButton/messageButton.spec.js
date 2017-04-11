import MessageButtonModule from './messageButton'
import MessageButtonController from './messageButton.controller';
import MessageButtonComponent from './messageButton.component';
import MessageButtonTemplate from './messageButton.html';

describe('MessageButton', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MessageButtonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MessageButtonController();
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
      expect(MessageButtonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MessageButtonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MessageButtonTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MessageButtonController);
      });
  });
});
