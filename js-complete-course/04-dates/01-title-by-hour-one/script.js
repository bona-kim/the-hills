/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // get current time
    var today = new Date();
    var time = (today.getHours()).toString() + (today.getMinutes()).toString();
    console.log(time); // time with 'hhmm' format. (0000 to 2359)

    if (time < 1800) { // before 0-18h   0000 - 1800
        document.getElementById("target").innerHTML = "Hello";
    } else {          // after 18h-     1801  2359
        document.getElementById("target").innerHTML = "Good evening";
    }


})();
