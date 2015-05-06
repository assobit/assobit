Meteor.startup(function () {
  
  Router.route('/roles', {
    name: 'rolesRoute',
    controller: AdminController,
    fastRender: true
  });

});