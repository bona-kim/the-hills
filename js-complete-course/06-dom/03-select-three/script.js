/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // select all the targets and put them in var targets
    let targets = document.querySelectorAll(".target");

    // change the content for every target
    targets.forEach(element => {
        element.innerHTML = "owned";
    });


})();
