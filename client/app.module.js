angular
  .module('app', [
    'ui.router',
    'app.templates'
  ])
  .config(function ($locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/hello');
    $locationProvider.html5Mode(true);
  })
;

