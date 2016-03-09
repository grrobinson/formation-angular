/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */


(function () {

    angular.module('app', ['app.user', 'ui.router']);

    angular.module('app').config(
       function userConfig(
           $locationProvider,
           $stateProvider,
           $urlRouterProvider
       ) {

            /* hashbang mode. */
            $locationProvider.html5Mode(false);
            /* Hashbang needs a prefix for SEO. */
            $locationProvider.hashPrefix('!');

            /* States. */
            $stateProvider
                .state('home', {
                    templateUrl: '/assets/angular/ng_app.html',
                    url: '/'
                })
               .state('userDetail', {
                    controller: 'ControllerUser',
                    templateUrl: '/assets/angular/user/ng_user_details.html',
                    url: '/users/:userId/'
                });

        /* Default route. */
        $urlRouterProvider.otherwise('/');

    }
);

})();
