/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("next").addEventListener("click", function() {

        var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // put the element for carousel in a variable
    let carousel = document.getElementsByTagName("img")[0];

    // get the src value of the current image
    let src = carousel.getAttribute("src");
    //console.log(src + " " + typeof(src));

    // check the index for the crr src in gallery array
    let srcIndex = gallery.indexOf(src);
    console.log(srcIndex+ " " + typeof(srcIndex));

    // set the index for the next image
    if(srcIndex === gallery.length-1) { // If the cur src is the last one in the array
        srcIndex = 0;                   // set the index with 0 (to go to the first img°
    } else {                            // otherwise
        srcIndex += 1
    }

    // change the src with the newIndex
    carousel.setAttribute("src", gallery[srcIndex] );
    });


})();
