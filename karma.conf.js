module.exports = function(config) {
  config.set({
    autoWatch: true,

    browsers: ['Chrome'],

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'tmp/js/vendor.js',
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/babel-external-helpers.js',
      'tmp/js/templates.js',
      'tmp/js/app.js',
      'tmp/js/test-helper.js',
      'tmp/js/specs.js'
    ],

    exclude: [],

    preprocessors: {},

    reporters: ['progress', 'coverage', 'threshold'],

    coverageReporter: {
      type : 'html',
      dir: 'coverage/client',
      subdir: '.',
      reporters: [
        { type: 'json' },
        { type: 'html' }
      ]
    },

    thresholdReporter: {
      branches: 83
    },
  });
};
