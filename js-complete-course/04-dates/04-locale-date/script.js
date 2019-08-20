/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let today = new Date();
    console.log(today.toString());
    // Output : Tue Aug 20 2019 12:07:11 GMT+0200 (CEST)
    console.log(today.getDay()+" "+today.getMonth()+" "+today.getDate());
    // the format I need  : Sunday 28 October 2018, 23h32

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];


    let formatted_date = days[today.getDay()]     + " "                      // Sunday
                        + today.getDate() + " "                              // 28
                        + months[today.getMonth()] + " "                     // OctoberDay
                        + today.getFullYear()+ ", "                           // 2018
                        + ("0"+today.getHours()).slice(-2).toString() + "h"+ ("0"+today.getMinutes()).slice(-2).toString(); // 23h02

    //console.log(formatted_date);

    document.getElementById("target").innerHTML = formatted_date ;

})();

/*

// easier way - use date.format library
var dateFormat = require('dateformat');
var now = new Date();
dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");*/
