$(document).on('ready', function () {
  $('.era-icon').hover( function () {
    $(this).parents('.era-institution').addClass('active');
    $(this).parents('.era').find('.institution-name').html($(this).parent().data('name'));
  }, function () {
    $(this).parents('.era-institution').removeClass('active');    
    $(this).parents('.era').find('.institution-name').html('');
  });

  $('.era-icon').on('click', function () {
    $('#lightbox').addClass('active');
    $('#lightbox-title').html($(this).parent().data('name'));

  });

  $('#lightbox .close').on('click', function () {
    $('#lightbox').removeClass('active');

  });  
});