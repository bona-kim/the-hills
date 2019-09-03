/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // At the click of the button,
    document.getElementById("run").addEventListener("click", function(){

        // call the getPosts function
        window.lib.getPosts(function(error, articles) {
            let articlesAll = articles;     // assign all articles to var articlesAll
            //console.log("Before", JSON.stringify(articles)); // keep original ver to compare with the result

            // for every article in articleAll do this
            articlesAll.forEach(function (article) {
                    // call the getComments function
                    window.lib.getComments(null, function (error, comments) {
                        // if there is a comment for the article with that id
                        if(undefined !== comments[article.id]) {
                            //add the comment property on that article(array)
                            article.comment = comments[article.id];
                        }
                    });
            });

            // afterwards display items in the console
            console.log("The result", articlesAll);

        })

        })

    })();