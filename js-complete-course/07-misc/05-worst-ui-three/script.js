/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // declare the necessary variables
    const result = document.getElementById("target");   // element for display whole number
    const slots = document.querySelectorAll("input");    // 4slot for part of number
    const buttons = document.querySelectorAll("button"); // all the stop buttons

    // separate the displayed numbers in + and 4part
    let number = ["460", "00", "00", "00"];
    result.innerHTML = "+" + number[0] + number[1] + number[2] + number[3];

    // create a new array with the result of MySlot for every array element(slots)
    var buttonReferences = Array.from(slots).map(mySlots);
    console.log('buttonReferences', buttonReferences);

    // let number in a slot goes up automatically
    function mySlots(slot, i) {
        // take the min&max num
        let minNr = Number(slot.getAttribute("data-min"));
        let maxNr = Number(slot.getAttribute("data-max"));
        // set the default for number with minNr
        let num = minNr;
        // for a leading 0
        let sliceNr;
        if (i === 0) {
            sliceNr = -3;
        } else {
            sliceNr = -2;
        }

        // Increase number till number = maxNr
        function increaseNum() {
            if (num < maxNr) {
                num++;
                let nrWithZero = ("0" + num).slice(sliceNr).toString(); // change the number with a leading 0
                slot.setAttribute("value", nrWithZero); // set the new number in the slot
            } else {
                num = minNr;    // if num reaches to maxNr, reset the number with minNR
            }
        }

        // Keep running the function increaseNumber every 0.2 seconds°
        return setInterval(increaseNum, 200);

    }

    // for all 4 button; run the function myButtons
    buttons.forEach(myButtons);

    function myButtons(button, i) {
        // if the stop buttons are clicked,
        button.addEventListener("click", function () {
            // the number is fixed
            clearInterval(buttonReferences[i]);
            // take the fixed number and set the attr with that
            slots[i].setAttribute("value", slots[i].value);
            // change the value for display
            number[i] = slots[i].value;
            // display the phone number
            result.innerHTML = "+" + number[0] + number[1]
                + number[2] + number[3];
        });


    }


})();
