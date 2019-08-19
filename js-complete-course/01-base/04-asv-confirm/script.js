/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var check = false;
    while (check === false) {
        var age = prompt("How old are you?");
        var gender = prompt("What is your gender?");
        var town = prompt("Where do you live?");

        check = confirm("You are " + age + "years old. \n"
            + "You are " + gender + ". \n"
            + "You live in " + town
            + ". \n\n Are these correct?");
    }
        window.alert("Thanks for your confirmation :) ");




    // your code here

})();
