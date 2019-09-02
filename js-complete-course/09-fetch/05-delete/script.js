/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
})();
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
            console.log(data);   // - before

            // get the id from the form
            let inputId = document.getElementById("hero-id").value;

            console.log(data.heroes.splice(data.heroes.findIndex(hero => hero.id == inputId),1));
            console.log(data);  // - after
        });
});




/*
splice()
 - Syntax: array.splice(*index, **howmany, ***item1, ..., itemX )
   * Required. An integer that specifies at what position to add/remove items.
               Use negative values to specify the position from the end of the array
   ** Optional. The number of items to be removed. if set to 0, no items will be removed.
   *** Optional. The new item(s) to be added to the array.
 - Return Value: A new Array, containing the removed items (if any)

findIndex()
 - Syntax: Array.findIndex(*function(currentValue, index, arr), **thisValue)
   * Required. A function to be run for each element in the array.
   ** Optional. A value to be passed to the function to be used as its "this" value.
      If this parameter is empty, the value "undefined" will be passed as its "this" value.
 - Return Value : the array element index
       if any of the elements in the array pass the test, otherwise it returns-1.
*/
