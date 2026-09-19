/* =========================================
   MUHAMMADJONOV & CO.
   Intro sequencing + interaction layer
========================================= */

const intro = document.getElementById("intro");
const hero  = document.getElementById("hero");

// Reveal the page as the black panels begin to split.
window.setTimeout(function () {
    hero.classList.add("revealed");
}, 2600);

// Remove the intro overlay once its animation has fully finished.
window.setTimeout(function () {
    if (intro) intro.classList.add("done");
}, 3700);


/* ---- Lock the single screen (no scrolling) ---- */

document.addEventListener(
    "wheel",
    function (event) { event.preventDefault(); },
    { passive: false }
);

document.addEventListener(
    "touchmove",
    function (event) { event.preventDefault(); },
    { passive: false }
);

document.addEventListener("keydown", function (event) {

    const blockedKeys = [
        "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
        "PageUp", "PageDown", "Home", "End", " "
    ];

    if (blockedKeys.includes(event.key)) {
        event.preventDefault();
    }

});
