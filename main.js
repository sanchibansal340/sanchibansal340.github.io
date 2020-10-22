// Vara for cusive animation in loader
var fontSize = 72;

if(window.screen.width > 700) 
    fontSize = 32;
        
else if(window.screen.width < 1200) 
    fontSize = 57;

var vara = new Vara("#container", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
    [
        {
            text:"Sanchi Bansal",
            y:200,
            duration:1500, 
            textAlign:"center",
            strokeWidth:2,
            fontSize:fontSize, 
        },
    ]
);

// Remove the loader(cursive) and show main page
$(window).on('load', function(){
    setTimeout(removeLoader, 2500);
  });
  function removeLoader(){
      $( "#container" ).fadeOut(500, function() {
        $( "#container" ).remove();
        $("#page-container").show()
    });  
}

// Go to Top Button
const goToTopBtn = document.getElementById("goToTop");

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
  }

window.onscroll = scrollFunction;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}