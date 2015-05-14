Meteor.startup(function () {
  Router.map(function() {
    this.route('form', {
      path: '/form',
      template: getTemplate('form')
    });
  });
});
