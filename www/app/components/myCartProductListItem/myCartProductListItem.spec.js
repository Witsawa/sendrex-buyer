import MyCartProductListItemModule from './myCartProductListItem'
import MyCartProductListItemController from './myCartProductListItem.controller';
import MyCartProductListItemComponent from './myCartProductListItem.component';
import MyCartProductListItemTemplate from './myCartProductListItem.html';

describe('MyCartProductListItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyCartProductListItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyCartProductListItemController();
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
      expect(MyCartProductListItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyCartProductListItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyCartProductListItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyCartProductListItemController);
      });
  });
});
