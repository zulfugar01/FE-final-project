$(document).ready(function () {
    // Transition effect for navbar 
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 105) {
            $('.header').addClass('solid');
            $('.site-icon').addClass('icon-colored');
            $('.navbar-right-a-items').addClass('navbar-right-a-items-colored');
        } else {
            $('.header').removeClass('solid');
            $('.site-icon').removeClass('icon-colored');
            $('.navbar-right-a-items').removeClass('navbar-right-a-items-colored');
        }
    });
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 100) {
            $('.wwd').addClass('fade');
        }
    });
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 600) {
            $('.wwd-bs-left').addClass('bs-left-fade');
        }
    });
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 600) {
            $('.wwd-bs-right').addClass('bs-right-fade');
        }
    });
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 1500) {
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 2900) {
            $('.wwa-clients').addClass('fade');
        }
    });
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
    });
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 3500) {
            $('.jobs').addClass('fade');
        }
    });
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 4200) {
            $('.news').addClass('fade');
        }
    });
// Vanilla JS
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    let btnA = document.querySelector(".footer-li-a"),
btnB = document.querySelector(".footer-li-b"),
btnC = document.querySelector(".footer-li-c");

function comA(){
    document.querySelector(".footer-box-a").style.display="block"
    document.querySelector(".footer-box-b").style.display="none";
    document.querySelector(".footer-box-c").style.display="none";
}
function comB(){
    document.querySelector(".footer-box-b").style.display="block"
    document.querySelector(".footer-box-a").style.display="none";
    document.querySelector(".footer-box-c").style.display="none";
}
function comC(){
    document.querySelector(".footer-box-c").style.display="block"
    document.querySelector(".footer-box-a").style.display="none";
    document.querySelector(".footer-box-b").style.display="none";
}
btnA.addEventListener("click", ()=>{
    comA();
    btnA.style.color = "orange";
    btnB.style.color = "inherit";
    btnC.style.color = "inherit";
})
btnB.addEventListener("click", ()=>{
    comB();
    btnB.style.color = "orange";
    btnA.style.color = "inherit";
    btnC.style.color = "inherit";
})
btnC.addEventListener("click", ()=>{
    comC();
    btnC.style.color = "orange";
    btnA.style.color = "inherit";
    btnB.style.color = "inherit";
})
});