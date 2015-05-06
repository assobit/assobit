addToPostSchema.push(
  {
    propertyName: 'roles',
    propertySchema: {
      type: [String],
      optional: true,
      editable: true,
      autoform: {
        editable: true,
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
