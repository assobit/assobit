Posts.registerField(
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



Users.registerField({
  fieldName: 'roles',
  fieldSchema: {
    type: [String],
    optional: true,
    autoform: {
      omit: true
    }
  }
});
