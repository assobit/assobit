Meteor.startup(function () {

  Template[getTemplate('editRoles')].events({
	  "submit .add-role": function (event) {

	    var role = event.target.role.value;

	    Meteor.call("updateRoles", Meteor.users.findOne({slug: Session.get("userSlug")})._id, role);

	    // Clear form
	    event.target.text.value = "";

	    // Prevent default form submit
	    return false;
	  },

    "click .remove-role": function (event) {

      var role = event.target.id;

      Meteor.call("removeRole", Meteor.users.findOne({slug: Session.get("userSlug")})._id, role);

      // Prevent default form submit
      return false;
    }

	});

	Template[getTemplate('editRoles')].helpers({
		roles: function() {
			return Meteor.users.findOne({slug: Session.get("userSlug")}).roles
		}
	})

});
