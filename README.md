![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-auth

[![Release](http://img.shields.io/npm/v/sails-generate-auth.svg?style=flat)](https://www.npmjs.org/package/sails-generate-auth) [![Code Climate](http://img.shields.io/codeclimate/github/kasperisager/sails-generate-auth.svg?style=flat)](https://codeclimate.com/github/kasperisager/sails-generate-auth) [![Dependency Status](http://img.shields.io/gemnasium/kasperisager/sails-generate-auth.svg?style=flat)](https://gemnasium.com/kasperisager/sails-generate-auth) [![Downloads](http://img.shields.io/npm/dm/sails-generate-auth.svg?style=flat)](https://www.npmjs.org/package/sails-generate-auth)


A Passport.js-based authentication generator for use with the Sails command-line interface.

So, how easy is it to use? Say you wanted to add Twitter authentication to our app for example – this is all you'd need:

```javascript
twitter: {
  name: 'Twitter',
  protocol: 'oauth',
  options: {
    consumerKey: 'your-consumer-key',
    consumerSecret: 'your-consumer-secret'
  }
}
```

This sets you up with an authentication endpoint at `/auth/twitter` as well as a callback at `/auth/twitter/callback` - easy, huh?


Behind the scenes, the service uses the concept of "Passports" to store everything related to user authentication. This allows you to keep your own models free of authentication-related bloat as well as help you optimize your application as the data is queried separately only when authentication happens.

I do encourage you to read through the entire source – everything's very well documented, so it should be an easy read.


### Installation

Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators.

In order to use a generator you will need the latest Sails, ~0.10, which can be installed with:

```sh
npm install sails@beta -g
```

<!--
```sh
$ npm install sails-generate-auth
```
-->


### Production Usage

##### On the command line

```sh
$ sails generate auth
```

##### In a node script

```javascript
var path = require('path');
var sailsgen = require('sails-generate');
var scope = {
	rootPath: path.resolve(__dirname)
};
sailsgen(require('sails-generate-auth'), scope, function (err) {
	if (err) throw err;

	// It worked.
});
```

##### Requirements

The only  requirements, besides running the generator and adding some providers in `config/passport.js`, is having a model named "User" in your application as well as a set of routes that exposes the authentication endpoints. You'll also need to load the Passport.js middleware for all your controllers and install the required NPM packages. Lastly, you need to add a line to `config/bootstrap.js` to load your Passport providers on startup.

At the very least, your User model needs to look like this:

```javascript
module.exports = {

  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' }
  }
};
```

As for the routes, this is what you'll need to add to your `config/routes.json` file:

```javascript
'get /login': 'AuthController.login',
'get /logout': 'AuthController.logout',
'get /register': 'AuthController.register',

'post /auth/local': 'AuthController.callback',
'post /auth/local/:action': 'AuthController.callback',

'get /auth/:provider': 'AuthController.provider',
'get /auth/:provider/callback': 'AuthController.callback',
'get /auth/:provider/:action': 'AuthController.callback',
```

Next, change your `config/bootstrap.js` to load your Passport providers on startup by adding the following line:

```javascript
sails.services.passport.loadStrategies();
```

All required Passport.js middleware is contained within the `passport` policy so all you need to do is load it before your controllers in `config/policies.js`:

```javascript
'*': [ 'passport' ]
```

Lastly, you will need to install the [`passport`](https://npmjs.org/package/passport), [`bcrypt-nodejs`](https://www.npmjs.org/package/bcrypt-nodejs) and [`validator`](https://npmjs.org/package/validator) packages from NPM for everything to work correctly.

If you want to make use of the error messages, you'll also need to add the following locale definitions (example translations provided):

```json
{
  "Error.Passport.Password.Wrong": "Whoa, that password wasn't quite right!",
  "Error.Passport.Password.NotSet": "Oh no, you haven't set a password yet!",
  "Error.Passport.Username.NotFound": "Uhm, what's your name again?",
  "Error.Passport.Email.NotFound": "That email doesn't seem right"
}
```


### Development

To get started quickly and see this generator in action, run the `bin/index.js` script:

```sh
$ git clone YOUR_FORK_OF_THIS_REPO sails-generate-auth-fork
$ cd sails-generate-auth-fork
$ npm install
$ node ./bin
```

`bin/index.js` is a simple script, bundled only for convenience, that runs the generator with hard-coded scope variables.  Please feel free to modify that file however you like!  Also see `CONTRIBUTING.md` for more information on overriding/enhancing generators.



### Questions?

See `FAQ.md`.



### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>

---

Copyright 2014 © [Kasper Kronborg Isager](http://kasperisager.github.io). Licensed under the terms of the [MIT License](LICENSE.md)
