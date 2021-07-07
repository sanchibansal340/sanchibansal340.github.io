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

// Collapse navbar on navlink click
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

const handleclick = (e) => {
    const name = e.target.nextElementSibling.querySelector(".project-name");
    name.style.color = "#F3A837";
}
