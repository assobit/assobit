Posts.addField(
  {
    fieldName: 'roles',
    fieldSchema: {
      type: [String],
      optional: true,
      editableBy: ["member", "admin"],
      autoform: {
        noselect: true,
        options: function () {
          var roles = Meteor.roles.find().map(function (role) {
            return {
              value: role.name,
              label: role.name
            }
          });
          return roles;
        }
      }
    }
  }
);



Users.addField({
  fieldName: 'roles',
  editableBy: ["member", "admin"],

  fieldSchema: {
    type: [String],
    optional: true,
    autoform: {
      omit: false
    }
  }
});
