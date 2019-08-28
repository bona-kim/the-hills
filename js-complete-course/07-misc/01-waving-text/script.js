/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let textElement = document.querySelector("#target");
    let text = textElement.innerText;

    text = text.split("");
    //console.log(text);

    textElement.innerText = "";

    let i = 0;
    text.forEach(function(letter){  // do this foor every letter in text

        // wrap each letter in span & give id
        let wrap = document.createElement("span");
        wrap.id = i;
        wrap.innerText = letter;

        // decide font-size depends on the positon.
        if (i % 10 === 1){
            wrap.style.fontSize = 10+"px";
        } else if ((i % 10 === 2) || (i % 10 === 0)){
            wrap.style.fontSize = 15+"px";
        } else if ((i % 10 === 3) || (i % 10 === 9)){
            wrap.style.fontSize = 20+"px";
        } else if ((i % 10 === 4) || (i % 10 === 8)){
            wrap.style.fontSize = 25+"px";
        } else if ((i % 10 === 5) || (i % 10 === 7)){
            wrap.style.fontSize = 30+"px";
        } else {
            wrap.style.fontSize = 35+"px";
        }

        // append the letter
        textElement.appendChild(wrap);
        i++;
    });



})();
