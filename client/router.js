// Use mainPanel because most routes will use it...
Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {

  this.route('all', {
      path: '/',
  });

  this.route('posts', {
      path: '/posts',
  });

  this.route('talks', {
      path: '/talks',
  });

  this.route('tutorials', {
      path: '/tutorials',
  });

  this.route('podcasts', {
      path: '/podcasts',
  });

  this.route('applications', {
      path: '/applications',
  });

});
