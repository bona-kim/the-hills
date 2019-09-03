/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // If the button is clicked
    document.getElementById("run").addEventListener("click", function(){

        fetch('http://localhost:63342/the-hills/js-complete-course/_shared/api.json')  // ask json file to the server and then Once it is ready, run the function
            .then(response => response.json())          // to get the json
            .then(data => console.log(data))            // display the data in the console

    });

})();
