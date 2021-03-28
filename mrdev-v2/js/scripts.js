// Sicherstellen dass $ für jQuery steht
(function ($) {

    // Funktion für CSS-Animation
    // prüft ob das Element im Viewport ist
    // und fügt die class "animated" ein

    function isInViewport() {
        var animationElement = $('.animate'); // Elemente die animiert werden
        var windowHeight = $(window).height(); // Fenster (Viewport) Höhe
        var windowTopPosition = $(window).scrollTop(); // Position wie weit bereits nach unter gescrollt wurde (Höhe von DOM Beginn bis zur Oberkante des Viewports)
        var windowBottomPosition = (windowTopPosition + windowHeight); // Die untere Position des Fenster (Viewport) wird berechnet aus der Fenster-Höhe + Top-Position

        $.each(animationElement, function () {
            var element = $(this);
            var elementHeight = element.outerHeight();
            var elementTopPosition = element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            // Überprüfung ob das Element entweder mit der Ober- oder Unterkante im Fenster (Viewport) sichtbar ist uns fügt die class "animated" hinzu
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                element.addClass('animated');
            }
        });
    }

// Führe diesen Codeblock erst aus, wenn der DOM geladen wurde
$(document).ready(function () {


    // entferne die class "no-js" aus dem Element <html> entfernen
    // und die class "js" einfügen
    $('html').removeClass('no-js').addClass('js');

    // Funktionsaufruf für Animation (damit bereits sichtbare Elemente animiert werden)
    isInViewport();

    // Navbar Toggle
    $('#nav-icon').click(function () {
        // Navbar hat einen Effekt fadeIn bzw. fadeOut von 250ms
        $('.nav-menu').fadeToggle(250);
        // Nav Icon wechselt vom Menu Icon zum Cross Icon mit dem Click
        $('#nav-icon').toggleClass('icon-menu2 icon-cross');
        // Fügt Html die Klasse fixed hinzu
        $('body').toggleClass('overflow');
    });
    // Funktion wenn man auf Anchor Tags klickt um Das Nav Menu mit einem Fade auszublenden und das Menu Icon zurückzusetzen
    $('a').click(function() {
        $('.nav-menu').fadeOut(250);
        let navIcon = $('#nav-icon');
        navIcon.removeClass('icon-cross');
        navIcon.addClass('icon-menu2');
        $('body').removeClass('overflow');
    });

    // Fügt der Navbar ab einer gewissen gescrollten Distanz eine Klasse mit definiertem Hintergrund hinzu
    let navBar = $('#navbar');
    $(window).scroll(function(event) {
        let current = $(this).scrollTop();
            if(current > 0){
                navBar.css("background-color", "rgb(82,98,133)");
            } else {
                navBar.css("background-color", "transparent");
            }
    });

    // Smooth Scroll
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
           // Prevent default anchor click behavior
           event.preventDefault();
           // Store hash
           var hash = this.hash;
           // Using jQuery's animate() method to add smooth page scroll
           // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
           $('html, body').animate({
              scrollTop: $(hash).offset().top
           }, 450, function(){
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
           });
        } // End if
        });

    // Führe diesen Codeblock aus, wenn gescrollt wird
    $(window).scroll(function () {

        // Funktionsaufruf für Animation (damit bereits sichtware Elemente animiert werden)
        isInViewport();

    });

    // Führe diesen Codeblock aus, wenn sich das Browserfenster verändert
    $(window).resize(function () {

    // Funktionsaufruf für Animation (damit bereits sichtware Elemente animiert werden)
    isInViewport();
    });
});


})(jQuery);