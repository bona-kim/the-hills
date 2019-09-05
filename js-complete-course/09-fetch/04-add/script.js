/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


        // ask json file to the server and then Once it is ready,
        fetch('http://localhost:63342/the-hills/js-complete-course/_shared/api.json')

        // get the json. Once it is done,
            .then(function (response) {
                return response.json()
            })

            // run the function
            .then(function (data) {
                console.log(data);   // to check data in json file
                // If the button is clicked
                document.getElementById("run").addEventListener("click", function () {

                    // get the id from the form
                let inputName = document.getElementById("hero-name").value;
                let inputAlterEgo = document.getElementById("hero-alter-ego").value;
                let inputPower = document.getElementById("hero-powers").value;
                console.log(inputName, inputAlterEgo, inputPower);

                // create a new hero array
                let newHero = {};

                newHero['id'] = data.heroes.length + 1;  // id : lengte of the data.hero + 1 //newHero.id = data.heroes.length +1
                newHero['name'] = inputName;            // name : inputName
                newHero['alterEgo'] = inputAlterEgo;    // Alter-Ego : inputAlterEgo
                newHero['abilities'] = [];              // prepare the array for abilities
                newHero.abilities.push(inputPower);     // put inputPower in array
                // console.log(newHero);
                data.heroes.push(newHero);              // put the New hero in a original array
                // console.log(data);

                // Display the result of your query in the console.
                console.log(data.heroes);

            });

    });

})();
