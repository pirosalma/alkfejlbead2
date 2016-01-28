/* jshint ignore:start */

define('pipbox/config/environment', ['ember'], function(Ember) {
  var prefix = 'pipbox';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("pipbox/tests/test-helper");
} else {
  require("pipbox/app")["default"].create({"name":"pipbox","version":"0.0.0+bc50d23a"});
}

/* jshint ignore:end */
