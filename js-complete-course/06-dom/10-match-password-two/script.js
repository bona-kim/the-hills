/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {

        // take all passwords input
        let passwords = document.querySelectorAll("input");

        // reset by every click
        passwords.forEach(password => password.classList.remove("error"));

        // both passwords are different OR empty -> add class "error"
        if (passwords[0].value !== passwords[1].value || passwords[0].value === "") {
            passwords.forEach(password => password.classList.add("error"))
        }

    })

})();
