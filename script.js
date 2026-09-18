/* =========================================
   MUHAMMADJONOV & CO.
   Minimal interaction layer
========================================= */

// Prevent scrolling completely
document.addEventListener(
    "wheel",
    function (event) {
        event.preventDefault();
    },
    { passive: false }
);

document.addEventListener(
    "touchmove",
    function (event) {
        event.preventDefault();
    },
    { passive: false }
);

// Prevent keyboard scrolling
document.addEventListener("keydown", function (event) {

    const blockedKeys = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " "
    ];

    if (blockedKeys.includes(event.key)) {
        event.preventDefault();
    }

});