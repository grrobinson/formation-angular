(function () {

    var userModule = angular.module('app.user');
    userModule.directive('wtUserInfo',
      function wtUserInfo() {
        return {
            replace: false,
            restrict: 'E',
            scope: {
              user: '=wtUser',
              remove: '&wtRemove'
            },
            templateUrl: '/assets/angular/user/ng_user_info.html'
        };
      }
    );

})();
