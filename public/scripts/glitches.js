var glitches = (function() {

  return {
    init : function() {
      glitches.staticLoop();
    },
    staticLoop : function() {
      window.setTimeout(function() {
        $('#static').fadeToggle(
          Math.floor((Math.random()*400)+1), 
          function(){
            $('#static').fadeToggle();
            glitches.staticLoop();
          });
      }, Math.floor((Math.random()*120000)+1) )
    }
  }
})();

$(document).on('ready', function() {
  glitches.init();
})