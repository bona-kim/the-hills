/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function changeBackground(color){
        document.body.style.background = color;
    }

    document.getElementById("red").addEventListener("click", function() {
        // change the background color
        changeBackground('red')
    });

    document.getElementById("green").addEventListener("click", function() {
        // change the background color
        changeBackground('green')
    });

    document.getElementById("yellow").addEventListener("click", function() {
        // change the background color
        changeBackground('yellow')
    });

    document.getElementById("blue").addEventListener("click", function() {
        // change the background color
        changeBackground('blue')
    });


})();
