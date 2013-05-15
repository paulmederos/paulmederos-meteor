$(document).ready(function() {
  window.setTimeout(showAbout, 500);

  $('.find-me-button').click(function(){
    $(this).addClass('fadeOutUp').fadeOut(500, function(){
      $('.on-the-internet').show().addClass('animated bounceInUp');
    });
  });
});

var showAbout = function showAbout(){
  $('.about-me').addClass('animated fadeInDown').delay(500).fadeIn('slow', function(){
    $('.find-me-button').show().addClass('animated fadeInDown');
  });
}