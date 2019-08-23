/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
    // When you click the button,
    document.getElementById("run").addEventListener("click", function() {

        // display in the console, one after the other (use a loop)

        // make empty character
        let together ="";

        // add every fruit in fruits with the white space before
        for(let i =0; i<fruits.length; i++){
            console.log(fruits[i]);
            together += " " + fruits[i];
        }

        // remove not necessary first white space
        together = together.slice(1);

        // display the result
        console.log(together);
        alert(together)

    });

})();
