/**
 * Oauth Model
 *
 * The Oauth model handles associating extra oauth values with profile.
 */
module.exports = {
  attributes: {

    // Associations
    //
    // Associate every oauth with one, and only one, profile. This requires an
    // adapter compatible with associations.
    //
    // For more information on associations in Waterline, check out:
    // https://github.com/balderdashy/waterline
    profile: { model: 'Profile', required: true }
  }
};
