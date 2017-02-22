

$(document).ready(function(){

  /*The Arrow Button*/
  $(".arrow").click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("nav").offset().top
    }, 1000);
  });

  /*The Navbar*/

  $(window).scroll(function() {
    var navbar = $("nav");
    var navHeight = $(".clothes-image").height();
    if ($(this).scrollTop() > navHeight) {
      navbar.addClass("fixed");
    } else {
      navbar.removeClass("fixed");
    }
  });

  $(window).scroll(function(){
    var navHeight = $(".clothes-image").height() + -100;
    if ($(this).scrollTop() >= navHeight) {
      $(".image2").fadeIn(1000);
      $(".line-1").fadeIn(1000);
      $(".line-2").fadeIn(1000);
    } else {
      $(".image2").fadeOut(1000);
      $(".line-1").fadeOut(1000);
      $(".line-2").fadeOut(1000);
    }
  });

});