import WishListButtonModule from './wishListButton'
import WishListButtonController from './wishListButton.controller';
import WishListButtonComponent from './wishListButton.component';
import WishListButtonTemplate from './wishListButton.html';

describe('WishListButton', () => {
  let $rootScope, makeController;

  beforeEach(window.module(WishListButtonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WishListButtonController();
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
      expect(WishListButtonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = WishListButtonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(WishListButtonTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(WishListButtonController);
      });
  });
});
