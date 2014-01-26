Handlebars.registerHelper('isActive', function (route) {
  var state  = Router.current();
  if (state === null) return;
  return (state.path.substring(1) === route) ? 'active' : '';
});

Handlebars.registerHelper('prettyDate', function (timestamp) {
  return prettyDate(timestamp);
});
