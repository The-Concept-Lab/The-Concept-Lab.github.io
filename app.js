
$('a').click(function(e){
    e.preventDefault();
    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 120
    }, 1000);
});

window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded");
  });