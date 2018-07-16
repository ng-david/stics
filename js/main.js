// $("#menu-btn").click(function(e) {
//   e.preventDefault();
//   if ($("#mobile-top").hasClass("hidden")) {
//     $("#mobile-top").removeClass("hidden")
//   } else {
//     $("#mobile-top").addClass("hidden");
//   }
// });
$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 400);
});
