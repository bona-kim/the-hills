/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // callback function to be used as a callback parameter.
    function myCallback(error, articles) {  // has two parameter
        console.log(articles);              // display the i
    }

    // At the click of the button,
    document.getElementById("run").addEventListener("click", function(){
        // call the getPosts function
        window.lib.getPosts(function(error, articles){
            // display the items obtained in the console
            console.log(articles);
        })
    })

})();
