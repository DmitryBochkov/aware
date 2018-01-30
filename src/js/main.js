$(document).ready(function() {
  $('.tabs a').on('click', function(event) {
    event.preventDefault();
    $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
    $(this).parent().siblings().removeClass('active');
    var id = $(this).attr('href');
    $(id).removeClass('hide');
    $(this).parent().addClass('active');
  });
});
