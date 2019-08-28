/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // get all 4 buttons
    const buttons = document.getElementsByTagName("button");

    // for Each button, will do this
    for (let i =0; i<buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            let minNr = buttons[i].getAttribute("data-min");
            let maxNr = buttons[i].getAttribute("data-max");

            let curNr = buttons[i].innerHTML;
            if ( curNr === maxNr ){
                curNr = minNr
            } else { curNr++ }
            console.log(curNr);
            if( i === 0) { curNr } else { curNr = ("0" + curNr).slice(-2).toString()}
            buttons[i].innerHTML = curNr;

            document.getElementById("target").innerHTML =
                "+" + buttons[0].innerHTML
                + ("0"+ buttons[1].innerHTML).slice(-2).toString()
                + ("0"+ buttons[2].innerHTML).slice(-2).toString()
                + ("0"+ buttons[3].innerHTML).slice(-2).toString()
        })

    }



})();
