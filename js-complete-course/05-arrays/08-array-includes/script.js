/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // When you click the button,
    document.getElementById("run").addEventListener("click", function() {

        // Check there is an apple in the array fruit,
        if (fruits.includes("apple")) {   // if apple is there)
            console.log("yes");           // Say yes or no in console
        } else {                          // if apple is not there
            console.log("no")             // Say yes or no in console
        }
    });

})();
