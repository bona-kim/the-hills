/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Display some text inside the target element.
    // Create a "typewriter" effect by making each letter
    // appear one after the other.
    // Use a random delay between each letter appearing.

    let container = document.getElementById("target");
    console.log(container);

    let letters = [container.innerText];
    console.log(letters);
    let t = -1;
    let letter = "";
    let message = container.innerHTML;
    let mode = 'write';
    let delay = 1000;

    function updateText(txt) {
        container.innerHTML = txt;
    }

    function tick(){
        if(container.innerHTML.length === 0){
            t++;
            letter = letter[t];
            message = "";
            mode = "write";
        }

        switch(mode) {
            case "write" :
                message += letter.slice(0,1);
                letter = letter.substr(1);
                updateText(message);

                if(letter.length === 0 && t === (letters.length - 1)) {
                    window.clearTimeout(timeout);
                    return;
                }

                if(letter.length === 0){
                    mode = 'delete';
                    delay = 1500;
                } else {
                    delay = 32 + Math.round(Math.random() * 40);
                }

                break;

            case 'delete' :
                message = message.slice(0, -1);
                updateText(message);

                if(message.length === 0)
                {
                    mode = 'write';
                    delay = 1500;
                } else {
                    delay = 32 + Math.round(Math.random() * 100);
                }
                break;


        }

        timeout = window.setTimeout(tick, delay);

    }


    let timeout = window.setTimeout(tick, delay);

})();



// help :  https://jayhoffmann.com/how-to-make-text-that-writes-itself-in-javascript/