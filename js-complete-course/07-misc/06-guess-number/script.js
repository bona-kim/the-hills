/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

 (function() {
    window.addEventListener('load', (event) => {

        // generate random value and put in a var
        let number = Math.floor((Math.random()*100) + 1);
        //alert(number);        // to check the right number in alert
        console.log(number);    // to check the right number in the console

        // count for the number of guesses
        let count = 1;


        let guess;
        do { //  asks the user till the guess is correct
            guess = prompt("Please guess the number between 1 and 100");
            if (guess > number){
                alert("lower");
                count++;                        // if the guess is wrong, add 1 to count for next guess
            } else if  (guess < number){
                alert("higher");
                count++;
            }
        } while (guess != number);

        console.log(count);
        window.alert("That's it! you needed " + count + " guesses.")




    });

    // your code here

})();
