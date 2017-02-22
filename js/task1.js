

$(document).ready(function(){

  $("#lazy").lazyload({
    effect : "fadeIn"
  });

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

  
});