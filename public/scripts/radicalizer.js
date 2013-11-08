$(document).ready(function() {
  $('#nav li').on('click', function(){
    $('#nav li').removeClass('clicked');
    $(this).addClass('clicked');
    console.log('clicked!');
  });
});