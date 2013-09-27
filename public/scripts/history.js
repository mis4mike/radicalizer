$(document).on('ready', function () {
  $('.era-icon').hover( function () {
    $(this).parents('.era-institution').addClass('active');
  }, function () {
    $(this).parents('.era-institution').removeClass('active');    
  });
});