'use strict';

var app = angular.module('routerApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/html/home.html',
    controller: 'homeCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/html/contact.html',
    controller: 'contactCtrl'
  })
  .state('list', {
    url: '/list/:num',
    templateUrl: '/html/list.html',
    controller: 'listCtrl',
    resolve: {
      pageObj:
      function(People, $stateParams) {
        // return a promise which will resolve to the pageObj
        console.log('$stateParams.num: ', $stateParams.num );
        return People.getByPage($stateParams.num);
      }
    }
  })
  .state('detail', {
    url: '/detail/:name',
    templateUrl: '/html/detail.html',
    controller: 'detailCtrl'
  })

  $urlRouterProvider.otherwise('/');
});
