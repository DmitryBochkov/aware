//= jquery.formstyler.min.js
$(document).ready(function() {
  // tabs
  $('.tabs a').on('click', function(event) {
    event.preventDefault();
    $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
    $(this).parent().siblings().removeClass('active');
    var id = $(this).attr('href');
    $(id).removeClass('hide');
    $(this).parent().addClass('active');
  });

  /**
   * accordion
   */
   $('.accordion__header').on('click', function(event) {
     event.preventDefault();
     var el = $(this);
     el.next('.accordion__body').slideToggle();
     el.toggleClass('open');
   });

   $('.styler').styler();

});
