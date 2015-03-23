// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('MainApp', ['ionic', 'controllers', 'services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })


config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('menu', {
            url: "/",
            abstract: true,
            templateUrl: "templates/menu.html"
        })
        .state('menu.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html"
                }
            }
        })
        .state('menu.gioithieu', {
            url: "/gioithieu",
            views: {
                'menuContent': {
                    templateUrl: "templates/gioithieu.html",
                    controller: ""
                }
            }
        })
        .state('menu.dichvu', {
            url: "/dichvu",
            views: {
                'menuContent': {
                    templateUrl: "templates/dichvu.html",
                    controller: ""
                }
            }
        })

        .state('menu.lienhe', {
            url: "/lienhe",
            views: {
                'menuContent': {
                    templateUrl: "templates/lienhe.html",
                    controller: ""
                }
            }
        })

    $urlRouterProvider.otherwise("/home");
});
