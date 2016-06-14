var _ = require('lodash');
var brunch = require('brunch');
var Server = require('karma').Server;
var server = new Server({
  configFile: __dirname + '/../karma.conf.js'
});

brunch.watch({ env: 'test' }, _.once(server.start.bind(server)));
