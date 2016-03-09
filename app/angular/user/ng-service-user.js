(function () {
  angular.module('app.user').factory('userList',
    function userList() {
      var lastId = 2;
      var userList =  [{
        firstName: 'first',
        lastName: 'last',
        eMail: 'email@mail.com',
        userId : 1,
      },{ firstName: 'second',
          lastName: 'lastsec',
          eMail: 'email@gmail.fr',
          userId : 2,
      }];

      var addUser = function addUser(user) {
        lastId++;
        user.userId = lastId;
        console.log('generating id ' + user.userId);
        userList.push(angular.copy(user));
      };

      var getUserList = function getUserList() {
        return userList;
      };

      var getUser = function getUser(id) {
        userSearched = null;
        userList.forEach(function(userElt){
          if(userElt.userId == id) {
            userSearched = userElt;
          }
        });
        return userSearched;
      };

      var getUserWishList = function getUserWishList(userId) {
        var wishListSearched = null;
        var user = getUser(userId);
        if (user) {
          wishListSearched = user.wishList;
        }
        return wishListSearched;
      };

      var addWish = function addWish(userId, wish) {
        user = getUser(userId);
        if(user) {
          if(!user.wishList) {
            user.wishList = [];
          }
          user.wishList.push(angular.copy(wish));
        }
      };

      return {
        addUser : addUser,
        getUserList : getUserList,
        getUser : getUser,
        getUserWishList : getUserWishList,
        addWish : addWish
      };
    }
  );
})();
