/* jshint node: true */
'use strict';

var getVersion = require('git-repo-version');
var addonInfo = require('./addon-info');

module.exports = {
  name: 'joda-misc',
  config: function() {
    let joda = {
      features: {
        misc: addonInfo
      },
      versions: {}
    };

    let path = this.project.root;
    if (this.project.pkg.name !== 'joda-misc') {
      path = this.project.addonPackages['joda-misc'].path;
    }

    var version = getVersion(null, path);
    if (version) {
      joda.versions['joda-misc'] = version;
    }

    return {
      Joda: joda
    };
  },
  isDevelopingAddon: function() {
    return true;
  }
};
