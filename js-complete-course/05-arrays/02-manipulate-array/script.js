/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
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
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function() {

        // remove the first and the last element,
        fruits.shift();
        fruits.pop();

        // add an element "banana" at the start of the array
        fruits.unshift("banana");

        // add an element "kiwi" at the end.
        fruits.push("kiwi");

        // see the result
        alert(fruits);

    });




})();
