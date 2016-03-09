(function () {
describe('ControllerUser', function testControllerUser() {

      var $controller = null;
      var $rootScope = null;

      beforeEach(module('app'));

      beforeEach(inject(
        function (_$controller_, _$rootScope_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }
      ));

      it('should add wishes', function addWish() {

        var controllerUserDetail = null;
        var scope = $rootScope.$new();

        controllerUser = $controller('ControllerUser', {
            $scope: scope,
            $stateParams: {userId: 1}
        });

        scope.addWish({title: 'Test 1'});
        scope.addWish({title: 'Test 2'});

        expect(scope.wishList).toEqual([
            {title: 'Test 1'},
            {title: 'Test 2'}
        ]);

      });
});
})();
