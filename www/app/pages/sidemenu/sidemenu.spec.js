import SidemenuModule from './sidemenu'
import SidemenuController from './sidemenu.controller';
import SidemenuComponent from './sidemenu.component';
import SidemenuTemplate from './sidemenu.html';

describe('Sidemenu', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SidemenuModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SidemenuController();
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
      expect(SidemenuTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SidemenuComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SidemenuTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SidemenuController);
      });
  });
});
