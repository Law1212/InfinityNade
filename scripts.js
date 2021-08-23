function swapImages(){
    var $active = $('#gallery .active');
    var $next = ($('#gallery .active').next().length > 0) ? $('#gallery .active').next() : $('#gallery img:first');
    $active.fadeOut(function(){
    $active.removeClass('active');
    $next.fadeIn().addClass('active');
    });
}

function swapImages2(){
  var $active = $('#gallery2 .active2');
  var $next = ($('#gallery2 .active2').next().length > 0) ? $('#gallery2 .active2').next() : $('#gallery2 img:first');
  $active.fadeOut(function(){
  $active.removeClass('active2');
  $next.fadeIn().addClass('active2');
    });
}

$(window).scroll(function() {
  $('.box-row-1').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass('slideUp').delay(13000);
      } 
      if(imagePos < topOfWindow-700)
        $(this).removeClass('slideUp');
  });
});

$(window).scroll(function() {
  $('.box-row-2').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass('slideUp').delay(13000);
      }
      if(imagePos < topOfWindow-700)
        $(this).removeClass('slideUp');
  });
});

$(window).scroll(function() {
  $('#section-box1').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+550) {
        $(this).addClass('slideRight').delay(13000);
      } 
  });
});

$(window).scroll(function() {
  $('#section-box2').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+550) {
        $(this).addClass('slideLeft').delay(13000);
      } 
  });
});

$(window).scroll(function() {
  $('#advantages-gallery').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+550) {
        $(this).addClass('slideUp').delay(13000);
      } 
  });
});

function removeAttributes() {
  $('#gallery .active').attr('style','');
}

function setGalleryHeight() {
  var windowHeight = $(window).height();
  var navHeight = $("nav").height();
  $("#gallery img").css("height", (windowHeight - navHeight) + "px");
  $("#gallery").css("height", (windowHeight - navHeight) + "px");
}

$(document).ready(function() {
  $(window).resize(function(){
    setGalleryHeight();
  });

  $('#gallery .active').css('transform', 'scale(1)');
  setTimeout(removeAttributes, 6000);
  setInterval('swapImages()', 6000);
  setInterval('swapImages2()', 6000);
})
