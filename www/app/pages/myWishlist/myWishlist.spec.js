import MyWishlistModule from './myWishlist'
import MyWishlistController from './myWishlist.controller';
import MyWishlistComponent from './myWishlist.component';
import MyWishlistTemplate from './myWishlist.html';

describe('MyWishlist', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyWishlistModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyWishlistController();
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
      expect(MyWishlistTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyWishlistComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyWishlistTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyWishlistController);
      });
  });
});
