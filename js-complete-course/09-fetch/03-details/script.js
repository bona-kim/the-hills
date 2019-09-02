/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // If the button is clicked
    document.getElementById("run").addEventListener("click", function(){


        // ask json file to the server and then Once it is ready,
        fetch('http://localhost:63342/the-hills/js-complete-course/_shared/api.json')

        // get the json. Once it is done,
            .then(function(response){
                return response.json()
            })


            // run the function
            .then(function (data) {
                console.log(data);   // to check data in json file

                // get the id from the form
                let inputId = document.getElementById("hero-id").value;

                // search the hero with that id
                function searchHero(hero){
                    return hero.id == inputId;
                }
                let theHero = data.heroes.find(searchHero);
                console.log("theHero", theHero);

                // get the index of the hero
                let heroIndex = data.heroes.indexOf(theHero);
                console.log("heroIndex", heroIndex);

                // console.log("name", theHero.name);
                // console.log("alterEgo", theHero.alterEgo);
                // console.log("abilities", theHero.abilities);

                // get the template
                let template = document.getElementById("tpl-hero");

                // clone it
                let clone = template.content.cloneNode(true);

                // put the information of the hero in the clone
                clone.querySelector(".name").innerHTML= theHero.name;
                clone.querySelector(".alter-ego").innerHTML= theHero.alterEgo;
                clone.querySelector(".powers").innerHTML= theHero.abilities;

                // append the clone with info inside the target
                document.getElementById("target").appendChild(clone);

            });


    });






})();
