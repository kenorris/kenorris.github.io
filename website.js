$(document).ready(function() {


  var text = ["journalist", "storyteller", "producer", "leader"];
  var counter = 0;
  var elem = document.getElementById("changeText");
  setInterval(change, 1500);

  function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 60);
  }
}

// Captures click events of all a elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

  $(window).scroll(function () {
      // Get the height of the banner,
      // and then set your menu.
      var bannerHeight = $('.banner').height();
      console.log(bannerHeight);
    if ($(window).scrollTop() > bannerHeight) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < bannerHeight) {
      $('#nav_bar').addClass('navbar-fixed');
    }

  });

});

