Template.header.events({
  'click .open': function (evt) {
    $this = $(evt.target);
    $this.text('close')
    $('#addForm').slideDown(200, function () {
      $this.addClass('close')
      $this.removeClass('open')
    });
  },
  'click .close': function (evt) {
    $this = $(evt.target);
    $this.text('add')
    $('#addForm').slideUp(200, function () {
      $this.addClass('open')
      $this.removeClass('close')
    });
  }
});
