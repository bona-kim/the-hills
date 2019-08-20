/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var today = new Date();
    var time = parseInt(
                (today.getHours()).toString()
                    + (("0" + today.getMinutes()).slice(-2)).toString()
                       );
    console.log(time + " " + typeof(time)); // time with 'hhmm' format. (0000 to 2399)

    if (time < 1730) { // before 0-18h   0000 - 1800
        document.getElementById("target").innerHTML = "Hello";
    } else {          // after 18h-     1801  2399
        document.getElementById("target").innerHTML = "Good evening";
    }

})();
