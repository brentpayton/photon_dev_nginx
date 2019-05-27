$(document).ready(function() {

  $('#lightgallery').lightGallery({
      selector: '.light-link',
      thumbnail : true,
      download : false
  });

  $('#srcset').lightGallery({
    thumbnail: false,
    download: false
  });

  $('.light-link').mouseenter(function() {
    $(this).addClass('fadeImg');
  });

  $('.light-link').mouseleave(function() {
    $(this).removeClass('fadeImg');
  });

  if (location.pathname === '/') {
    $(".nav").find(".home").addClass("active");
  }

  if (location.pathname === '/nature.html') {
    $(".nav").find(".nature").addClass("active");
  }

  if (location.pathname === '/travel.html') {
    $(".nav").find(".travel").addClass("active");
  }

  if (location.pathname === '/other.html') {
    $(".nav").find(".other").addClass("active");
  }

  if (location.pathname === '/about.html') {
    $(".nav").find(".about").addClass("active");
  }

  $(".nav a").on("click", function(){
     $(".nav").find(".active").removeClass("active");
     //$(this).parent().addClass("active");
  });

});
