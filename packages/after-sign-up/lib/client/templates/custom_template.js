Template.fullPageAtForm.events({
  "click #at-btn": function(e, t) {
    if (AccountsTemplates.getState() == "signUp") {
      Router.go("/page/da-compilare")
    }
  }
});
