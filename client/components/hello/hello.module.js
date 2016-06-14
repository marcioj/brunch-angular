angular
  .module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hello', {
        url: '/hello',
        template: '<hello></hello>'
      })
    ;
  })
  .component('hello', {
    templateUrl: 'hello/template.jade',
    controller: function () {
      this.message = 'world';
    }
  })
;
