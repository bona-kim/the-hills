/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // create an HTML table with 1 column and 10 rows.
    let target = document.getElementById("target");

    let table = document.createElement("table");
    table.setAttribute("id", "myTable"); // set id for my table
    table.setAttribute("border",1);      // set border to see the line


    // put the table inside the target
    target.appendChild(table);

    // Insert 10rows, 10cell inside each row
    for(let r=0; r<10; r++){
        // Insert a row
        let row =document.getElementById("myTable").insertRow(r);
        // Insert a 10cells inside the row
        for(let c=0; c<10; c++){
            let col = row.insertCell(c);
        }
    }



    /*





    // Put the table  the element with id "target"

    target.appendChild(table)


*/


})();
