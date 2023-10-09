
var exec = require('cordova/exec');

var PLUGIN_NAME = 'ASWebAuthentication';

var ASWebAuthentication = {
  start: function(redirectScheme, requestURL, cb, errorCb) {
    exec(cb, errorCb, PLUGIN_NAME, 'start', [redirectScheme, requestURL]);
  }
};

module.exports = ASWebAuthentication;
