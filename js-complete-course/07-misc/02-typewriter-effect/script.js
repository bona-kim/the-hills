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

    let i = 0;
    let text = document.getElementById("target").innerText;
    //console.log(text)
    let speed = 30;
    document.getElementById("target").innerHTML="";

    function typewriter(){
        if (i < text.length){
            document.getElementById("target").innerHTML += text.charAt(i);
            i++;
            setTimeout(typewriter, speed);
        }
    }

    typewriter();


})();



// help :  https://jayhoffmann.com/how-to-make-text-that-writes-itself-in-javascript/