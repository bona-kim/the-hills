/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    document.getElementById("run").addEventListener("click", function () {

        console.log("clicked");

        // Get the 2 input password
        let passOne = document.getElementById("pass-one");
        let passTwo = document.getElementById("pass-two");

        // If they are not same, change the border color of the input boxes to be red
        if (passOne.value !== passTwo.value) {
            passOne.style.borderColor = "red";
            passTwo.style.borderColor = "red";
        } else {
            passOne.style.borderColor = "silver";
            passTwo.style.borderColor = "silver";
        }

    })

})();
