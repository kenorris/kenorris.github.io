$(document).ready(function(){

	var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

	//main layout

	$('#clips').click(function () {
        $('.clips-info').slideToggle(300);
        $('#production').hide ();
		$('#videoreporting').hide ();
		$('#writing').hide ();

        $(".contact-info").hide();
        $(".resume-info").hide();
     });

	$('#resume').click(function () {
        $('.resume-info').slideToggle(300);
        $(".contact-info").hide();
        $(".clips-info").hide();
     });

	$('#contact').click(function () {
        $('.contact-info').slideToggle(300);
        $(".resume-info").hide();
        $(".clips-info").hide();

     });

    $(".scroll").click(function(event){   
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
    });


//clips tabs
	$('#box1').click(function () {
        $('#production').slideToggle(300);
		$('#videoreporting').hide ();
		$('#writing').hide ();
     });

	$('#box2').click(function () {
        $('#videoreporting').slideToggle(300);
        $('#production').hide ();
        $('#writing').hide ();
     });

	$('#box3').click(function () {
        $('#writing').slideToggle(300);
        $('#production').hide ();
        $('#videoreporting').hide ();
     });

    $(".scroll").click(function(event){   
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
    });
	//portfolio

	$("#production").hide();
	$("#videoreporting").hide();
	$("#writing").hide();
		//fades

	$("#journolink").on("click",function(){
		$("#journo").fadeIn("slow");
		$("#digital").hide();
	});

	$("#digitallink").on("click",function(){
		$("#journo").hide();
		$("#digital").fadeIn("slow");
	});

		//click

	$(".boxy").click(function() {
	   $(".boxy").removeClass("active");  // remove active class from all
	   $(this).addClass("active");         // add active class to clicked
	});

});
