exports.config = {
  specs: ['client/**/*.e2e.spec.js'],
  onPrepare() {
    jasmine.getEnv().randomizeTests(true);
    jasmine.getEnv().seed(process.env.SEED);
  }
};
