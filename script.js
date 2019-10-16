(function() {
    var animationElement = document.getElementsByClassName("pop-up")[0];
    var mouseon = false;
    var animationInProgress = false;

    window.addEventListener("mouseenter", function(e) {
        console.log(e.target);
    });

    animationElement.addEventListener("mouseenter", function(e) {
        mouseon = true;
        animateCharUp();
    });

    animationElement.addEventListener("mouseleave", function(e) {
        mouseon = false;
        animateCharDown();
    });

    function animateCharUp() {
        animationInProgress = true;
        animationElement.classList.add("pop-up-up");
        setTimeout(function() {
            animationInProgress = false;
            setTimeout(function() {
                animateCharDown();
            }, 200);
        }, 500);
    }

    function animateCharDown() {
        if (!animationInProgress && !mouseon) {
            animationElement.classList.remove("pop-up-up");
        }
    }
})();
