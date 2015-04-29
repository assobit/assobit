// ------------------------------------------------------------------------------------------- //
// -------------------------------------- Subscriptions -------------------------------------- //
// ------------------------------------------------------------------------------------------- //

// add a subscription to be preloaded before the rest of the app
//preloadSubscriptions.push('customPublication');


// add items to the admin menu
// adminMenu.push({
//   route: 'rolesRoute',
//   label: 'rolesAdminLink',
//   description: '' // optional
// });

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------ Zones ------------------------------------------ //
// ------------------------------------------------------------------------------------------- //

// add templates to the post items
postModules.push({
  template: 'customModule',
  order: 99
});

// add templates to the post heading zone
postHeading.push({
  template: 'customHeading',
  order: 99
});

// add templates to the post meta zone
postMeta.push({
  template: 'customMeta',
  order: 99 
});

// ------------------------------------------------------------------------------------------- //
// -------------------------------------- User Profiles -------------------------------------- //
// ------------------------------------------------------------------------------------------- //

userProfileDisplay.push({
  template: 'customTemplate',
  order: 99 
});

userProfileEdit.push({
  template: 'editRoles',
  order: 99 
});