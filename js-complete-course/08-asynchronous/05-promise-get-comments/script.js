/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // At the click of the button,

    let articleAll;
    document.getElementById("run").addEventListener("click", function(){

        window.lib.getPosts()
            .then((articles)=> {
                console.log("articles", articles);
                articleAll = articles;
                articleAll.forEach(function(article){

                    window.lib.getPosts()
                        .then((comments)=> {
                            if(undefined !== comments[article.id]) {
                                article.comment = comments[article.id];
                            }
                        })
                })
            })

        .then((result)=>{
            console.log("The result", articleAll);
        });





    })
})();
