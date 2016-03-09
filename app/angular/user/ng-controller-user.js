(function () {

    var userModule = angular.module('app.user');
    userModule.controller('ControllerUser',
        function ControllerUser($scope, $stateParams, userList) {

            var currentUserId = $stateParams.userId;

            $scope.userList = userList.getUserList();
            $scope.wishList = userList.getUserWishList(currentUserId);

            $scope.add = function add(args) {
                userList.addUser(args.user);
            };

            $scope.remove = function remove(args) {
                //$scope.userList.
                console.log("Cannot remove yet");
            };

            $scope.getCurrentUser = function getCurrentUser() {
              return userList.getUser(currentUserId);
            };

            $scope.addWish = function addWish(wish) {
              userList.addWish(currentUserId, wish);
              $scope.wishList = userList.getUserWishList(currentUserId);
            };

        });

})();
