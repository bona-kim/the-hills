/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
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
        let year = document.getElementById("year").value;
        //console.log(year)

        let d = new Date();
        //console.log(d);
        d.setFullYear(year, 0, 13);
        //console.log(d);

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

        for(i=0; i < 12; i++){
            if(d.setMonth()){

            }
        }







    });


})();