Meteor.methods({
  /**
   * update a user's permissions
   *
   * @param {Object} targetUserId Id of user to update
   * @param {Array} roles User's new permissions
   * @param {String} group Company to update permissions for
   */
  updateRoles: function (targetUserId, roles, group) {
    var user = Meteor.users.findOne({_id: targetUserId})

    // if (!loggedInUser ||
    //     !Roles.userIsInRole(loggedInUser,
    //                         ['manage-users','support-staff'], group)) {
    //   throw new Meteor.Error(403, "Access denied")
    // }

    var new_roles = user.roles || []

    new_roles.push(roles)

    Roles.setUserRoles(targetUserId, new_roles, group)
  },

  removeRole: function (targetUserId, role, group) {
    var user = Meteor.users.findOne({_id: targetUserId})

    // if (!loggedInUser ||
    //     !Roles.userIsInRole(loggedInUser,
    //                         ['manage-users','support-staff'], group)) {
    //   throw new Meteor.Error(403, "Access denied")
    // }

    var new_roles = user.roles || []

    var index = new_roles.indexOf(role);

    if (index > -1) {
      new_roles.splice(index)
    }

    Roles.setUserRoles(targetUserId, new_roles, group)
  }

})
