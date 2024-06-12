


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


//Skapar skroll på sidan
$(function () {

	var x = document.getElementById("myLinks");

	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			x.style.display = "none";

			if (target.length) {
				$('html, body').animate({

					scrollTop: target.offset().top - 50

				}, 600);

				return false;
			}
		}
	});
});