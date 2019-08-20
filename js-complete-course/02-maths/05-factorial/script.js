/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // get the input number
        let number = parseInt(document.getElementById("number").value);
        //console.log(number);

        // calculate its factorial
        let result=1;                     // set result = 1 first.
        for (let i=2; i < number+1; ++i){ // from 1 to the input nr
            //console.log(i);
            result = result * i           // multiply by numbers
        }

        // show the result
        window.alert(result);



    });

})();
