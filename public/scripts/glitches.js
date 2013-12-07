var glitches = (function() {

  return {
    init : function() {
      glitches.staticLoop();
      //glitches.dontPanicLoop();
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
    },
    dontPanicLoop : function() {
      window.setTimeout(function() {
        $('#dont-panic').addClass("rainbow");
        window.setTimeout(function(){
            $('#dont-panic').removeClass("rainbow");
            glitches.dontPanicLoop();
          }, Math.floor((Math.random()*200)+700));
      }, Math.floor((Math.random()*18000)+1) )
    }
  }
})();

$(document).on('ready', function() {
  glitches.init();
})