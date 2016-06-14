// Display in karma output if tests ran in random order and the seeds used

class SeedReporter {
  jasmineDone({ order }) {
    if (order.random) {
      __karma__.log('INFO', ['Randomized with seed ' + order.seed]); // eslint-disable-line no-undef
    }
  }
}

jasmine.getEnv().randomizeTests(true);
jasmine.getEnv().seed(process.env.SEED);
jasmine.getEnv().addReporter(new SeedReporter());

// Angular configuration

beforeEach(module('ui.router', function($urlRouterProvider) {
  $urlRouterProvider.deferIntercept();
}));

afterEach(inject(function ($httpBackend, $timeout, $rootScope) {
  $rootScope.$destroy();
  $httpBackend.verifyNoOutstandingExpectation();
  $httpBackend.verifyNoOutstandingRequest();
  // $timeout.verifyNoPendingTasks();
  jasmine.clock().uninstall();
}));

// Force a specific timezone in tests

// moment.tz.setDefault('America/Sao_Paulo');
