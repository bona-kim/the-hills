/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // When you click the button,
    document.getElementById("run").addEventListener("click", function () {

        let numbers = [];
        // display the ten elements of an array of 10 numbers (between 1 and 100)
        for (let i = 1; i < 11; i++) {        // Do this 10 times
            //console.log(i);
            let randomnr = Math.floor((Math.random() * 100) + 1); // Generate a random number
            //console.log(randomnr);
            numbers.push(randomnr);
            //console.log(numbers);
            let newId = "n-" + i;
            //console.log(newId + " " + typeof(newId));
            document.getElementById(newId).innerHTML = randomnr;
        }
        // display the smallest number
        document.getElementById("min").innerHTML = Math.min(...numbers);
        // display the biggest number
        document.getElementById("max").innerHTML = Math.max(...numbers);
        // display the sum of all numbers
        document.getElementById("sum").innerHTML = numbers.reduce((a, b) => a + b);
        // display their average.
        document.getElementById("average").innerHTML = numbers.reduce((a, b) => a + b, 0) / numbers.length


    });

})();
