/**
 * Profile Model
 *
 * The Profile model handles associating extra user values with users.
 */
var Profile = {

  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {

    //Example
    //github: { model: 'Oauth', required: false },

    // Associations
    //
    // Associate profile with one, and only one, user. This requires an
    // adapter compatible with associations.
    //
    // For more information on associations in Waterline, check out:
    // https://github.com/balderdashy/waterline
    user: { model: 'User', required: true }
  }
};

module.exports = Profile;
