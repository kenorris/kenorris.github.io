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

