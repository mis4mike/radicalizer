var formController = {
  init: function () {
    /* look for containers and make them work */
    if($('#create-institution').length) {
      formController.createInstitutionSetup();
    }
    if($('.form-box').length) {
      formController.institutionResponsesSetup();
    }    
  },
  institutionResponsesSetup: function () {
    $('.share-it').on('click', function () {
      if($('.share-box').hasClass('active')) {
        $('.share-box').slideToggle().removeClass('active');
      } else {
        $('.form-box div').hide('blind').removeClass('active');
        $('.share-box').slideToggle().addClass('active');
      }
    });
    $('.rock-it').on('click', function () {
      if($('.response-box-positive').hasClass('active')) {
        $('.response-box-positive').slideToggle().removeClass('active');
      } else {
        $('.form-box div').hide('blind').removeClass('active');        
        $('.response-box-positive').slideToggle().addClass('active');
      }
    });
    $('.block-it').on('click', function () {
      if($('.response-box-negative').hasClass('active')) {
        $('.response-box-negative').slideToggle().removeClass('active');
      } else {
        $('.form-box div').hide('blind').removeClass('active');
        $('.response-box-negative').slideToggle().addClass('active');
      }
    });
  },
  createInstitutionSetup: function () {
/*    $("#institution-name").on('blur', function () {
      $('.start-era').addClass('attention');
    });
    $('.start-era').on('click', function () {
      $('.era').removeClass('active');
      $(this).parent().addClass('active').nextAll().addClass('active');
      $('.start-era').removeClass('attention');
    });*/
    $('.era-slider').slider({
      orientation: 'vertical',
      range: 'min',
      min: 0,
      max: 3,
      value: 0,
      slide: function (event, ui) {
        formController.updateTimelineValues(event, ui);
      }
    });
  },
  updateTimelineValues: function (event, ui) {
    /* update form fields */
    $('.' + $(event.target).data('era') + '-relevance').val(ui.value);
    formController.drawTimelineGraph();
  },
  drawTimelineGraph: function () {
    var graph = $('.timeline-graph');
    var context = graph[0].getContext('2d');
    var heightY = 140;
    context.clearRect ( 0 , 0 , graph.width() , heightY + 6 );
    console.log(graph.height());
    context.beginPath();
    context.moveTo(0,heightY);
    context.lineTo(34,heightY - 34 * parseInt($('.prehistory-relevance').val()));
    context.lineTo(108,heightY - 34 * parseInt($('.ancient-relevance').val()));
    context.lineTo(184,heightY - 34 * parseInt($('.postclassical-relevance').val()));
    context.lineTo(260,heightY - 34 * parseInt($('.modern-relevance').val()));
    context.strokeStyle='red';
    context.lineWidth = 3;
    context.stroke();
  }
}

$(document).on("ready", function () {
  formController.init();
});


