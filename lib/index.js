/**
 * sails-generate-auth
 *
 * Usage:
 * `sails generate auth`
 *
 * @type {Object}
 */
module.exports = {

  templatesDirectory: require('path').resolve(__dirname,'../templates'),

  before: require('./before'),

  targets: {
    './': {
      exec: function (scope, cb) {
        console.log('Running generator (sails-generate-auth) @ `'+scope.rootPath+'`...');
        cb();
      }
    },

    // Authentication controller
    './api/controllers/AuthController.js': { template: 'api/controllers/AuthController.js' },

    // Passport model
    './api/models/Passport.js': { template: 'api/models/Passport.js' },

    // Profile model
    './api/models/Profile.js': { template: 'api/models/Profile.js' },

    // Oauth model
    './api/models/Oauth.js': { template: 'api/models/Oauth.js' },

    // Passport middleware
    './api/policies/passport.js': { template: 'api/policies/passport.js' },

    // Passport wrapper
    './api/services/passport.js': { template: 'api/services/passport.js' },

    // Authentication protocols
    './api/services/protocols': { folder: {} },
    './api/services/protocols/index.js': { template: 'api/services/protocols/index.js' },
    './api/services/protocols/local.js': { template: 'api/services/protocols/local.js' },
    './api/services/protocols/oauth.js': { template: 'api/services/protocols/oauth.js' },
    './api/services/protocols/oauth2.js': { template: 'api/services/protocols/oauth2.js' },
    './api/services/protocols/openid.js': { template: 'api/services/protocols/openid.js' },

    // Passport configuration
    './config/passport.js': { template: 'config/passport.js' },

    // Passport locale
    './config/locales/en.json': { template: 'config/locales/en.json' },
  }
};
