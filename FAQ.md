# FAQ (Frequently Asked Questions)


### Which version should I use?

The latest stable version in npm is always a safe bet.

```sh
$ npm install sails-generate-auth
```

[![NPM](https://nodei.co/npm/sails-generate-auth.png?downloads=true&stars=true)](https://nodei.co/npm/sails-generate-auth/)



### Where is the documentation?
+ Documentation for this module is in the README.md file.
+ [Docs for the latest stable npm release of Sails are on the website](http://sailsjs.org/#!documentation)



### What is a generator?

A generator is one of the three main types of Sails plugins.  It allows you to extend or override a generator in the Sails command-line interface (i.e. when a user runs `sails new` and/or `sails generate`.

Out of all the types of plugins, generators involve the fewest lines of code, and are probably the best way to get your hands dirty without getting buried.


### What kind of things can I do in a generator?

Generators are mainly about creating files.  There are built-in helpers for:

+ creating folders
+ copying files
+ EJS template
+ running other generators



### How do I get involved?

+ [Contributing to this module](./CONTRIBUTING.md)
+ If you find a bug with this module, please submit an issue to the tracker in this repository.  Better yet, send a pull request :)


### Where do I get help?

+ [Ask a question on StackOverflow](http://stackoverflow.com/questions/tagged/sailsjs?sort=newest&days=30)
+ Get help from the [Google Group](https://groups.google.com/forum/#!forum/sailsjs)
+ Get help on IRC ([#sailsjs on freenode](http://irc.netsplit.de/channels/details.php?room=%23sailsjs&net=freenode))
+ [Tweet @sailsjs](http://twitter.com/sailsjs)


### Why haven't I gotten a response to my feature request?

When people see something working in practice, they're usually a lot more down to get on board with it!  That's even more true in the open-source community, since most of us are not getting paid to do this (myself included).  The best feature request is a pull request-- even if you can't do the whole thing yourself, if you blueprint your thoughts, it'll help everyone understand what's going on.

### I want to make a sweeping change / add a major feature
It's always a good idea to contact the maintainer(s) of a module before doing a bunch of work.  This is even more true when it affects how things work / breaks backwards compatibility.

### The maintainer of this module won't merge my pull request.

Most of the time, when PRs don't get merged, a scarcity of time is to blame.  I can almost guarantee you it's nothing personal :)  And I can only speak for myself here, but in most cases, when someone follows up on a PR that's been sitting for a little while on Twitter, I don't mind the reminder at all.

The best thing about maintaining lots of small modules is that it's trivial to override any one of them on their own.  If you need some changes merged, please feel empowered to fork this model and release your own version.

If you feel that yours is the better approach, and should be the default, share it with the community via IRC, Twitter, Google Groups, etc.  Also, feel free to let the core Sails/Waterline team know and we'll take it into consideration.



### More questions?

> If you have an unanswered question that isn't covered here, and that you feel would add value for the community, please feel free to send a PR adding it to this section.
