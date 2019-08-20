/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // On the click to the button
    document.getElementById("run").addEventListener("click", function() {
        // get the birth date of the visitor
        let birthDay = document.getElementById("dob-day").value;
        let birthMonth = document.getElementById("dob-month").value;
        let birthYear = document.getElementById("dob-year").value;
        //console.log(day + ' ' +month + ' ' +year)

        // get the date of Today
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        console.log(month);
        let day = today.getDate();
        console.log(day);

        // Calculate his basic age with years
        let age = year - birthYear;   // my case : 2019 - 1988 = 31

        // Adjust -1 depending on the date
        if ( (month >= birthMonth) ||         // my case : 8 > 6
             ((month = birthMonth) && (day >= birthDay)) ) {     // bday of this year is already passed.
            window.alert("You are " + age + " years old!" );            // display his/her age
        } else {                                                 // bday of this year is not passed yet.
            window.alert("You are " + (age - 1) + " years old!" )       // display his/her age
        }
    });


})();
