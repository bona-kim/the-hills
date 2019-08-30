/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {

        let passwords = document.querySelectorAll("input");
        // console.log(passwords,typeof(passwords));
        let passOne = document.getElementById("pass-one").value;
        let passTwo = document.getElementById("pass-two").value;

        passwords.forEach(password => password.classList.remove("error"));

        if (passOne !== passTwo || passOne === ""){
            passwords.forEach(password => password.classList.add("error"))
        }


        /*
        // Get the 2 input password
        let passOne = document.getElementById("pass-one");
        let passTwo = document.getElementById("pass-two");

        // If they are not same, change the border color of the input boxes to be red
        if (passOne.value !== passTwo.value) {
            passOne.classList.add("error");
            passTwo.classList.add("error");
        }

         */

    })

})();
