//= jquery.formstyler.min.js
//= jquery-ui.min.js
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

   // price range slider
   $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] );
        $( "#amount2" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );


});
