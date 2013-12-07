var historyController = (function() {
  var throbbingInstitutions = true;
  return {
    showInstitution: function (name) {
      var $list = $('#institution-list');
      var $institution = $list.find('li[data-name="' + name + '"]');
      if($institution.length) {
        $('#lightbox-title').html($institution.data('name'));
        $('#lightbox .description').html($institution.data('description'));
      } else {
        $('#lightbox-title').html("Not Found");
        $('#lightbox .description').html("Mike is lazy and hasn't written this yet. Try some of the institutions in the list!");
      }

      $('#lightbox').addClass('active'); 
      $('#institution-list .institution').removeClass('rainbow');
      $('#institution-list .institution[data-name="' + $institution.data('name') + '"]').addClass('rainbow');
    },
    getInstitutions: function() {
      $.ajax({
        url: "/institutions/list/"
      }).done( function (data) {
        var institutionList = $.parseJSON(data);
        var institutionTypes = [];
        var $list = $('#institution-list');
        $(institutionList).each(function(){
          if(!$list.find('ul[data-name="' + this.type +'"]').length) {
            var $newType = $('<ul>' + this.type + '</ul>')
                          .attr('data-name', this.type)
                          .addClass('institution-type');
            $list.append($newType);
          }
          var $newInstitution = $('<li>' + this.name + '</li>')
                          .addClass('institution')
                          .attr('data-name', this.name)
                          .attr('data-type', this.type)
                          .attr('data-description', this.description);
          $list.find('ul[data-name="' + this.type +'"]').append($newInstitution);
        });
        $('#institution-list .institution').on('click', function () {
          historyController.showInstitution($(this).data('name'));
        });
      });
    },
    flickerInstitutions : function () {
      var flicker = function () {
        $('.era[data-name="present-moment"] .era-institution').toggleClass('throbbing');        
      };
      flicker();
      window.setTimeout(flicker, 500);
      window.setTimeout(flicker, 800);
      window.setTimeout(flicker, 1300);

      if(throbbingInstitutions) {
        window.setTimeout(historyController.flickerInstitutions, 3000);
      }
    },
    init: function () {
      historyController.getInstitutions();

      historyController.flickerInstitutions();
      $('body').on('click', function() {
        throbbingInstitutions = false;
        $('body').off('click');
      })
      /* Navigation between eras */
      $('.go-to-era').on('click', function () {
        $('.era-container').hide('fade');
        $('.era-container.'+$(this).data('era')).toggle('fade');
      })
      /* Hovering over era icons */
      $('.era-icon').hover( function () {
        $(this).parents('.era-institution').addClass('active');
        $('.institution-name.'+$(this).parents('.era').data('name')).html($(this).parent().data('title'));
      }, function () {
        $(this).parents('.era-institution').removeClass('active');    
        $('.institution-name.'+$(this).parents('.era').data('name')).html('');
      });
      /* Activates an institution - looks like hovering in the ui */
      /* Tapping twice is the same as a click */
      $('.era-icon').on('touchstart', function (e) {
        if($(this).parents('.era-institution').hasClass('active')) {
          $(this).click();
        } else {
          e.preventDefault();
          e.stopPropagation();
          $('.era-institution').removeClass('active')
          $(this).parents('.era-institution').addClass('active');
          $('.institution-name.'+$(this).parents('.era').data('name')).html($(this).parent().data('title'));
        }
      });
      /* Clicking shows the institution in a lightbox */
      $('.era-icon').on('click', function () {
        historyController.showInstitution($(this).parent().data('name'));
      });
      $('.lightbox-close').on('click', function () {
        $('#lightbox').removeClass('active');
      });  
    }
  }
})();

$(document).on('ready', function () {
  historyController.init();
});