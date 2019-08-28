/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").addEventListener("input", detectInput);

    let input = document.getElementById("pass-one");
    let validity = document.getElementById("validity");

    function detectInput() {
        if (validator() === true){
            validity.innerHTML = "ok";
        } else {
            validity.innerHTML = "not ok";
        }
    }

    function validator() {
        let atLeastTwoDigits = new RegExp("[0-9].*[0-9]");
        // at least 8 characters long and contains at least two numbers
        return (input.value.length >= 8) && (atLeastTwoDigits.test(input.value))
    }

})();
