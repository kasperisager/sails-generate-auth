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

    // User model
    './api/models/User.js': { template: 'api/models/User.js' },

    // Passport model
    './api/models/Passport.js': { template: 'api/models/Passport.js' },

    // Passport middleware
    './api/policies/passport.js': { template: 'api/policies/passport.js' },

    // Bearer Authentication Policy
    './api/policies/bearerAuth.js': { template: 'api/policies/bearerAuth.js' },

    // Passport wrapper
    './api/services/passport.js': { template: 'api/services/passport.js' },

    // Authentication protocols
    './api/services/protocols': { folder: {} },
    './api/services/protocols/index.js': { template: 'api/services/protocols/index.js' },
    './api/services/protocols/local.js': { template: 'api/services/protocols/local.js' },
    './api/services/protocols/oauth.js': { template: 'api/services/protocols/oauth.js' },
    './api/services/protocols/oauth2.js': { template: 'api/services/protocols/oauth2.js' },
    './api/services/protocols/openid.js': { template: 'api/services/protocols/openid.js' },
    './api/services/protocols/bearer.js': { template: 'api/services/protocols/bearer.js' },
    './api/services/protocols/cas.js': { template: 'api/services/protocols/cas.js' },

    // Passport configuration
    './config/passport.js': { template: 'config/passport.js' },

    // Authentication views
    './views/auth/login.ejs': { copy: 'views/auth/login.ejs' },
    './views/auth/register.ejs': { copy: 'views/auth/register.ejs' }
  }
};
