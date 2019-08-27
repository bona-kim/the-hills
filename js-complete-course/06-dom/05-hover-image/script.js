/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let image = document.getElementsByTagName("img")[0];
    console.log(image.value);
    // when hovering over the image
    image.addEventListener("mouseover", function() {
        image.setAttribute("src", "../../_shared/img/kiss-wink-heart.svg");
        image.setAttribute("alt", "kiss-wink-heart");
    });
    // When NOT hovering over the image
    image.addEventListener("mouseout", function() {
        image.setAttribute("src", "../../_shared/img/kiss.svg");
        image.setAttribute("alt", "kiss");
    });

})();
