/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        // generate a random color
        let randomColor = 'rgb('+ Math.floor(Math.random() * 256)
                           +', '+ Math.floor(Math.random() * 256)
                           +', '+ Math.floor(Math.random() * 256) +')';
        console.log(randomColor + typeof(randomColor));
        // use the random color qs the background.
        document.body.style.background = randomColor;
    });




})();
