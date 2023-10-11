var exec = require('cordova/exec');

var PLUGIN_NAME = 'ASWebAuthSession';

var ASWebAuthSession = {
  start: function(redirectScheme, requestURL, cb, errorCb) {
    exec(cb, errorCb, PLUGIN_NAME, 'start', [redirectScheme, requestURL]);
  }
};

module.exports = ASWebAuthSession;
