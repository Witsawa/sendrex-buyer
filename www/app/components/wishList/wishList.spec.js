import WishListModule from './wishList'
import WishListController from './wishList.controller';
import WishListComponent from './wishList.component';
import WishListTemplate from './wishList.html';

describe('WishList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(WishListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WishListController();
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
      expect(WishListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = WishListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(WishListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(WishListController);
      });
  });
});
