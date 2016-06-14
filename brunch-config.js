exports.config = {
  overrides: {
    test: {
      paths: {
        public: 'tmp'
      }
    }
  },
  npm: {
    enabled: false
  },
  paths: {
    watched: ['client', 'spec']
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': function (path) {
          return /^client/.test(path) && !/spec.js$/.test(path);
        },
        'js/test-helper.js': 'spec/test-helper.js',
        'js/specs.js': function (path) {
          return /spec.js$/.test(path);
        },
        'js/vendor.js': /^vendor/
      },
      order: {
        before: [
          /jquery.js$/,
          /app.module.js$/,
          /module.js$/
        ]
      }
    },
    stylesheets: {
      joinTo: {
        'css/application.css': /^(client|vendor)/
      }
    },
    templates: {
      joinTo: {
        'js/templates.js': /^client[\/\\](.*)\.jade$/
      }
    }
  },
  modules: {
    definition: false,
    wrapper: function (path, data) {
      if (/^client/.test(path)) {
        return [
          '',
          '(function () {',
          '',
          data,
          '',
          '})();',
          ''
        ].join('\n');
      } else {
        return data;
      }
    }
  },
  server: {
    port: 3000
  },
  plugins: {
    babel: {
      presets: [],
      ignore: [/^(node_modules|vendor)/],
      pattern: /\.(js)$/
    },
    jadeNgtemplates: {
      modules: [{
        name: 'app.templates',
        pattern: /^client[\/\\](.*)\.jade$/,
        url: function (path) {
          var replacement = /^client\/components\/(.*)/.exec(path)[1];
          return path.replace(path, replacement);
        }
      }]
    },
    autoReload: {
      match: {
        stylesheets: /\.css$/
      }
    }
  }
};
