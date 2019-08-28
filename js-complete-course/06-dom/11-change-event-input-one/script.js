/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("input", detectInput);


    function detectInput() {

        let input = document.getElementById("pass-one").value;
        let counter = document.getElementById("counter");

        if (input.length === 10){
            counter.innerHTML = input.length;
            input = document.getElementById("pass-one").setAttribute("maxlength",10);
        } else {
            counter.innerHTML = input.length;
        }
    }

})();
