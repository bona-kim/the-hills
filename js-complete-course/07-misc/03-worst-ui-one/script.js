/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // If input is changed, run the function detectInput
    document.getElementById("slider").addEventListener("input", detectInput);


    function detectInput() {

        let rangeInput = document.getElementById("slider").value;

        // change the value attr of the slider
        document.getElementById("slider").setAttribute("value",rangeInput);

        // display the phone number with a leading 0 in the target paragraph
        document.getElementById("target").innerHTML = "0" +rangeInput;
    }





})();
