(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'main',
        url: '/',
        component: 'posts'
      })
      .state({
        name: 'edit',
        url: '/:post_id/edit',
        component: 'editPost'
      });
  }
}());
