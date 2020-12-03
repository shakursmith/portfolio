/* Navigation for Side Menu (mobile only) */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('navBar');


hamburgerBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
});

/* Cool New Typing Effect */
const typeName = "Shakur Shabaazz";
let i = 0;

function typeText() {
  if (i < typeName.length) {
      document.getElementById("typing").innerHTML += typeName.charAt(i);
      i++;
      setTimeout(typeText, 300);
  } if (document.getElementById("typing").innerHTML === typeName) {
    $('#typing').addClass( "without-after-element" );
  }
}
typeText();

/* Smooth Scrolling Added for Extra Browser Support */
$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
  
          window.location.hash = hash;
        });
      }
    });
  });

/* change menu color when we reach the about section */
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var target = $("#about").offset().top;
    if (scroll >= target) {
        $("#hamburgerBtn i").addClass("hamburgerBtn-white");
    } else {
        $("#hamburgerBtn i").removeClass("hamburgerBtn-white");
    }
});