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
        // ask json file to the server and then Once it is ready, run the function
        fetch('http://localhost:63342/the-hills/js-complete-course/_shared/api.json').then(function(response){
            // to get the text in it. Once it is done, run the function with the text
            response.json().then(function (data) {
                // display the data in the console,
                console.log(data);
            })
        })
    });

})();
