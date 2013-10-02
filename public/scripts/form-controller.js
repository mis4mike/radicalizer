var formController = {
  init: function () {
    /* look for containers and make them work */
    if($('#create-institution').length) {
      this.createInstitutionSetup();
    }
  },
  createInstitutionSetup: function () {
    $("#institution-name").on('click', function () {
      $('.start-era').addClass('attention');
    });
    $('.start-era').on('click', function () {
      $('.era').removeClass('active');
      $(this).parent().addClass('active').nextAll().addClass('active');
      $('.start-era').removeClass('attention');
    });
  }
}

$(document).on("ready", function () {
  formController.init();
});


