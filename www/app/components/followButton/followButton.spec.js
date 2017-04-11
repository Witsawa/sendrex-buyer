import FollowButtonModule from './followButton'
import FollowButtonController from './followButton.controller';
import FollowButtonComponent from './followButton.component';
import FollowButtonTemplate from './followButton.html';

describe('FollowButton', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FollowButtonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FollowButtonController();
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
      expect(FollowButtonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FollowButtonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FollowButtonTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FollowButtonController);
      });
  });
});
