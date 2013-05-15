// Function to show the About section
var showAbout = function showAbout(){
  $('.about-me').addClass('animated fadeInDown').delay(500).fadeIn('slow', function(){
    $('.find-me-button').show().addClass('animated fadeInDown');
  });
}

// Google Analytics variables
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-30913790-1']);
_gaq.push(['_setDomainName', 'paulmederos.com']);
_gaq.push(['_trackPageview']);


// Once page is loaded, run these scripts
$(document).ready(function() {
  window.setTimeout(showAbout, 500);

  $('.find-me-button').click(function(){
    $(this).addClass('fadeOutUp').fadeOut(500, function(){
      $('.on-the-internet').show().addClass('animated bounceInUp');
    });
  });

  // Google Analytics runtime
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
});