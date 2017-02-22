

$(document).ready(function(){

  /*The Arrow Button*/
  $(".arrow").click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("nav").offset().top
    }, 1000);
  });

  $(window).on('scroll', function(){
    var newHeight = $(window).height() - $("nav").height();
    if ($(window).scrollTop() > newHeight) {
      // debugger
      $("nav").addClass('navbar-fixed');
    } else {
      $("nav").removeClass('navbar-fixed');
    }
  });


});