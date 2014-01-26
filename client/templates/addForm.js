Template.addForm.events({
  'click .add-resource': function (evt, tmp) {
    // validate with parsley
    $('#createResource').parsley('validate');

    if (!$( '#createResource' ).parsley( 'isValid' )) {
      return;
    }

    // close the addForm

    var title = $('#title').val(),
        link  = $('#link').val(),
        tags  = $('#tags').val(),
        tags = getTags(tags);

    if (tags === null)
      tags = [];

    Resources.insert({
      title: title,
      url: link,
      tags: tags
    });

    $('#addForm').slideUp(200, function () {
      $('#createResource')[0].reset();
    })
    $('.close:first').text('add').removeClass('close').addClass('open');
  }
});

var possibleTags = ['posts', 'talks', 'tutorials', 'podcasts', 'applications'];

function getTags (str) {
  var userTags = str.split(' ');

  // check for tags that are in both arrays
  return _.intersection(userTags, possibleTags);
}
