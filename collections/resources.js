//
// Create the resource collection on server and client
//
Resources = new Meteor.Collection('resources');

Resources.allow({
  // Just allow users insert a link but they can't
  // delete or update
  'insert': function (id, doc) {
    doc.createdAt = new Date().toISOString();
    return true;
  }
})
