/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function(){

            window.lib.getPosts().then(function(posts){
                console.log(posts);
            });


    })
})();


/*

Important : Need to check which implementation is used. You can check it in index.html
            It was not callback.js but promise.js!!!

            */
