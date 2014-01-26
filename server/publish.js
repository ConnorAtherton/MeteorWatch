//
// Publish all resources to the server
//
Meteor.publish('resources', function () {
  return Resources.find();
})
