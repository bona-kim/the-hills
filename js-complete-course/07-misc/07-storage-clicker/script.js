/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("increment").addEventListener("click", clickCounter);

    function clickCounter() {
        if (typeof (Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount) + 1;
            } else {
                localStorage.clickcount = 1;
            }
            localStorage.setItem("myClick", localStorage.clickcount);
            document.getElementById("target").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
        } else {
            document.getElementById("target").innerHTML = "Sorry, your browser does not support web storage...";
        }
    }

})();
