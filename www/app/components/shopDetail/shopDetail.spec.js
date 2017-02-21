import ShopDetailModule from './shopDetail'
import ShopDetailController from './shopDetail.controller';
import ShopDetailComponent from './shopDetail.component';
import ShopDetailTemplate from './shopDetail.html';

describe('ShopDetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ShopDetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ShopDetailController();
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
      expect(ShopDetailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ShopDetailComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ShopDetailTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ShopDetailController);
      });
  });
});
