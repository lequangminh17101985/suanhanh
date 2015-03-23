// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('MainApp', ['ionic'])


.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('menu', {
            url: "/menu",
            abstract: true,
            templateUrl: "menu.html"
        })
        .state('menu.home', {
            url: "/menu/home",
            views: {
                'menuContent': {
                    templateUrl: "home.html"

                }
            }
        })
        .state('menu.gioithieu', {
            url: "/menu/gioithieu",
            views: {
                'menuContent': {
                    templateUrl: "gioithieu.html"

                }
            }
        })
        .state('menu.dichvu', {
            url: "/menu/dichvu",
            views: {
                'menuContent': {
                    templateUrl: "dichvu.html"

                }
            }
        })

        .state('menu.lienhe', {
            url: "/menu/lienhe",
            views: {
                'menuContent': {
                    templateUrl: "lienhe.html"
                }
            }
        })


})

.controller('MainCtrl', function ($scope, $ionicSideMenuDelegate) {

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
});
