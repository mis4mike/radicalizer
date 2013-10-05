var formController = {
  init: function () {
    /* look for containers and make them work */
    if($('#create-institution').length) {
      this.createInstitutionSetup();
    }
  },
  createInstitutionSetup: function () {
    $("#institution-name").on('blur', function () {
      $('.start-era').addClass('attention');
    });
    $('.start-era').on('click', function () {
      $('.era').removeClass('active');
      $(this).parent().addClass('active').nextAll().addClass('active');
      $('.start-era').removeClass('attention');
    });
    $('.era-slider').slider({
      orientation: 'vertical',
      range: 'min',
      min: 0,
      max: 3,
      value: 0,
      slide: function( event, ui ) {
        this.drawTimelineGraph();
      }
    });
  },
  drawTimelineGraph: function () {
    var graph = $('.timeline-graph');
  }
}

$(document).on("ready", function () {
  formController.init();
});


