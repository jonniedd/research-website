const navbarToggleBtn = document.querySelector('.navbar-toggle-btn');
const navbarNav = document.querySelector('.navbar-nav');

const navbarToggleFunc = function() {
    navbarToggleBtn.classList.toggle('active');
    navbarNav.classList.toggle('active');
}

navbarToggleBtn.addEventListener('click', navbarToggleFunc);

$(document).ready(function() {
    $(".topic-btn").click(function() {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".blog-card").show("1000");
        }
        else {
            $(".blog-card")
            .not("." + value)
            .hide("1000");
            $(".blog-card")
            .filter("." + value)
            .show("1000");
        }
    })
})