import ShopsModule from './shops'
import ShopsController from './shops.controller';
import ShopsComponent from './shops.component';
import ShopsTemplate from './shops.html';

describe('Shops', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ShopsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ShopsController();
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
      expect(ShopsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ShopsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ShopsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ShopsController);
      });
  });
});
