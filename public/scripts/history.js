$(document).on('ready', function () {
  $('.go-to-era').on('click', function () {
    $('.era-container').hide('fade');
    $('.era-container.'+$(this).data('era')).toggle('fade');
  })
  $('.era-icon').hover( function () {
    $(this).parents('.era-institution').addClass('active');
    $('.institution-name.'+$(this).parents('.era').data('name')).html($(this).parent().data('name'));
  }, function () {
    $(this).parents('.era-institution').removeClass('active');    
    $('.institution-name.'+$(this).parents('.era').data('name')).html('');
  });
  $('.era-icon').on('touchstart', function (e) {
    if($(this).parents('.era-institution').hasClass('active')) {
      $(this).click();
    } else {
      e.preventDefault();
      e.stopPropagation();
      $('.era-institution').removeClass('active')
      $(this).parents('.era-institution').addClass('active');
      $('.institution-name.'+$(this).parents('.era').data('name')).html($(this).parent().data('name'));
    }
  });
  $('.era-icon').on('click', function () {
    $('#lightbox').addClass('active');
    $('#lightbox-title').html($(this).parent().data('name'));
  });

  $('#lightbox .close').on('click', function () {
    $('#lightbox').removeClass('active');
  });  
});