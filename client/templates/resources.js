Template.all.resources = function () {
  // eventually sort by timetstamps
  return Resources.find({}, {sort: {createdAt: -1}}).fetch();
}

Template.posts.resources = function () {
  // eventually sort by timetstamps
  return Resources.find({ tags: 'posts' }, {sort: {createdAt: -1}}).fetch();
}

Template.talks.resources = function () {
  // eventually sort by timetstamps
  return Resources.find({ tags: 'talks' }, {sort: {createdAt: -1}}).fetch();
}

Template.tutorials.resources = function () {
  // eventually sort by timetstamps
  return Resources.find({ tags: 'tutorials' }, {sort: {createdAt: -1}}).fetch();
}

Template.podcasts.resources = function () {
  // eventually sort by timetstamps
  return Resources.find({ tags: 'podcasts' }, {sort: {createdAt: -1}}).fetch();
}

Template.applications.resources = function () {
  // eventually sort by timetstamps
  return Resources.find({ tags: 'applications' }, {sort: {createdAt: -1}}).fetch();
}
