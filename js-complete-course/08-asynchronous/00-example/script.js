/* becode/javascript
 *
 * /10-asynchronous/00-example/script.js - 10.0: exemple d'asynchronicité
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

(() => {
    // setupIntervalMessage is the function which has two parameter "label", "delay"
    const setupIntervalMessage = (label, delay) => { // What this function does is
        let count = 0; // declare default count with 0

        return setInterval(() => console.log(`${label}:`, ++count), delay);
        /* and it returns 'the result' of the setInterval function
                           which is show the msg "label : count" in the console, per para time(delay)
           SetInterval has also 2 parameters
            - 1st para is The function that will be executed.
              In this case, "() => console.log(`${label}:`, ++count)"
                     the function displays msg 'label : count(after adding 1' in the console.
            - 2nd para is "delay" <- The intervals (in milliseconds) on how often to execute the code
        */
    };


    let intervals = []; // make a new empty array called intervals

    // if the button is clicked run this code, run the function (anonymous function - good for the function not be reused again)
    document.getElementById("run").addEventListener("click", () => {
        // if the array interval's length is not 0 = not empty
        if (intervals.length) {
            // make all 5 intervals made stop
            intervals = intervals.filter(clearInterval);
            // up is same code with below
            // intervals.forEach(function(intervalNumber) {clearInterval(intervalNumber);})

            // return an array containing all the array element that clearInterval
            console.clear();
        }

        // put the label:delayseconds to the array intervals
        intervals.push(setupIntervalMessage("one", 1000));
        intervals.push(setupIntervalMessage("two", 1333));
        intervals.push(setupIntervalMessage("three", 2500));
        intervals.push(setupIntervalMessage("four", 5000));
        intervals.push(setupIntervalMessage("five", 10000));
    });
})();

// Array.filter(function)
// Return An Array containing all the array elements that pass the test(function).
// If no elements pass the test it returns an empty array.