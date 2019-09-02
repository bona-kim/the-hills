/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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
                // console.log(data);   // to check data in json file

                // get the template
                let template = document.getElementById("tpl-hero");

                // Do this n times (n: the numbers of heroes)
                for(let i =0; i <data.heroes.length; i++){
                    // clone the template
                    let clone = template.content.cloneNode(true);

                    // Put the information of each hero in the right place
                    clone.querySelector(".name").innerHTML= data.heroes[i].name;
                    clone.querySelector(".alter-ego").innerHTML= data.heroes[i].alterEgo;
                    clone.querySelector(".powers").innerHTML= data.heroes[i].abilities;

                    // append the clone with info inside the target
                    document.getElementById("target").appendChild(clone);

                    //console.log("clone", clone) how can we see the content in it;
                }




            });


    });
})();

/*

<template id="tpl-hero">
    <li class="hero">
    <h4 class="title">
    <strong class="name"></strong>
    <em class="alter-ego"></em>
    </h4>
    <p class="powers"></p>
    </li>
    </template>
    <ol id="target"></ol>

    */
