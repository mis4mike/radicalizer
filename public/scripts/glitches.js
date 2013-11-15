var glitches = (function() {

  return {
    init : function() {
      glitches.staticLoop();
    },
    staticLoop : function() {
      window.setTimeout(function() {
        $('#static').fadeToggle(
          Math.floor((Math.random()*200)+1), 
          function(){
            $('#static').fadeToggle();
            glitches.staticLoop();
          });
      }, Math.floor((Math.random()*180000)+1) )
    }
  }
})();

$(document).on('ready', function() {
  glitches.init();
})