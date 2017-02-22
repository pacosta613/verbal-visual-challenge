

$(document).ready(function(){

  /*The Arrow Button*/
  $(".arrow").click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(".navbar-brand").offset().top
    }, 1000);
  });




});