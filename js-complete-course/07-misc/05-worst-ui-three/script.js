/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const slots = document.querySelectorAll("input");
    const result = document.getElementById("target");
    const buttons = document.querySelectorAll("button");

    var buttonReferences = Array.from(slots).map(mySlots);
    console.log('buttonReferences', buttonReferences);

    // let numbers goes up automatically
    function mySlots(slot, i){
        let minNr = Number(slot.getAttribute("data-min"));
        let maxNr = Number(slot.getAttribute("data-max"));

        console.log(minNr + maxNr);
        let num = minNr;

        let sliceNr;
        if (i === 0){ sliceNr = -3; } else { sliceNr = -2; }

        function increaseNum(){
            if (num < maxNr){
                num++;
                let nrWithZero = ("0"+num).slice(sliceNr).toString();
                slot.setAttribute("value", nrWithZero);
            }
        }

        return setInterval(increaseNum, 200);
    }


    buttons.forEach(myButtons);

    // if the stop buttons are clicked, the number is fixed
    function myButtons(button, i){
        button.addEventListener("click",function(){
            console.log(slots[i].value);
            slots[i].setAttribute("value", slots[i].value);
            clearInterval(buttonReferences[i]);

            switch(i) {
                case 0:
                    // code block
                    break;
                case 1:
                    // code block
                    break;
                case 2:
                    // code block
                    break;
                case 3:
                    // code block
                    break;
                default:
                // code block
            }
            result.innerHTML = "+" + slots[0].value + slots[1].value
                                   + slots[2].value + slots[3].value

        });


    }









    // display the number on the top



})();
