/* becode/javascript
 *
 * /05-arrays/04-walk-two/script.js - 5.4: parcours de tableau (2)
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

        // display in the console, one after the other (use a forEach)

        let together = "";

        fruits.forEach(myFunction);

        function myFunction(item) {
            together += " " + item
        }

        // remove unnecessary first white space
        together = together.slice(1);

        // display the result
        console.log(together);
        alert(together);




    });

})();
