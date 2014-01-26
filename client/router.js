// Use mainPanel because most routes will use it...
Router.configure({
    layoutTemplate: 'layout'
});

var filters = {
  nProgressHook: function () {
    if (this.ready()) {
      var time = Math.round(Math.random() * 9) / 10;
      NProgress.set(time) ;
      NProgress.done();
    } else {
      NProgress.start();
      this.stop();
    }
  },

  resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  }
}

// Use nProgress on every route that has to load a subscription
  Router.before(filters.nProgressHook);

Router.map(function () {

  this.route('all', {
      path: '/',
  });

  this.route('posts', {
      path: '/posts',
      before: filters.nProgressHook
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
