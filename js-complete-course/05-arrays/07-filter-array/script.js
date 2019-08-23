/* becode/javascript
 *
 * /05-arrays/07-filter-array/script.js - 5.7: filtrer un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var people = [
        {
            firstname: "Dreddy",
            lastname: "Nussgen",
            age: 70,
        },
        {
            firstname: "Yves",
            lastname: "Sear",
            age: 49,
        },
        {
            firstname: "Marcel",
            lastname: "Cowderay",
            age: 59,
        },
        {
            firstname: "Dag",
            lastname: "Binnall",
            age: 31,
        },
        {
            firstname: "Horten",
            lastname: "Claesens",
            age: 75,
        },
        {
            firstname: "Charmian",
            lastname: "Harnes",
            age: 10,
        },
        {
            firstname: "Sean",
            lastname: "Littlejohns",
            age: 37,
        },
        {
            firstname: "Hazlett",
            lastname: "Sprouls",
            age: 87,
        },
        {
            firstname: "Marcel",
            lastname: "Hasted",
            age: 66,
        },
        {
            firstname: "Cary",
            lastname: "Summerson",
            age: 15,
        },
        {
            firstname: "Feodor",
            lastname: "Ollett",
            age: 56,
        },
        {
            firstname: "Kelly",
            lastname: "Ranahan",
            age: 62,
        },
        {
            firstname: "Madelene",
            lastname: "Davie",
            age: 14,
        },
        {
            firstname: "Bent",
            lastname: "Karpe",
            age: 82,
        },
        {
            firstname: "Reinaldo",
            lastname: "Grimbleby",
            age: 81,
        },
    ];

    // your code here

    // When you click the button,
    document.getElementById("run").addEventListener("click", function() {

        // this function checks the item's age if it is 18+
        function checkAdult(item){
            return item.age >= 18;
        }

        // Create an array for 18+
        // with using the 'checkAdult' function as a 'filter' to array 'people'
        let adults = people.filter(checkAdult);

        // Display the resulting array in the console.
        console.log(adults)


        /* // Another way (not using filter)
        // check all the person in array people (run myFunction with every person)
        people.forEach(function(person) {
            // if the person's age is more than 18
            if ( person.age >= 18) {
                adults.push(person)   // put the person in adults array
            }
        });

        // Display the resulting array in the console.
        console.log(adults)

         */

    });
})();
