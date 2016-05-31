const app = angular.module('movie-search-app', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../partials/home.html',
      controller: 'HomeController'
    })
    .when('/:search', {
      templateUrl: '../partials/search.html',
      controller: 'SearchController'
    })
    .when('/:id/show', {
      templateUrl: '../partials/show.html',
      controller: 'ShowController'
    })
  $locationProvider.html5Mode(true);
});