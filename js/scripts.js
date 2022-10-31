$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function(){
  $("#counter").countdown({
  until: new Date(2022, 11-1, 21),
  format: 'dHM'
  });

  $("#counter_wrapper").fitText(1.2, {
  minFontSize: '20px',
  maxFontSize: '50px'
  });
});