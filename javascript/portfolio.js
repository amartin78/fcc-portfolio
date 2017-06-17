$(document).ready(function() {
  $('body').scrollspy({
    target: '.navbar'
  })

  $('button').focus(function() {
    $(this).css("color", "#FFF");
  });

  $("#navbar-portfolio a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1400, function() {
        window.location.hash = hash;
      });
    }
  });
});