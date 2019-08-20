/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    for(let i = 1; i<101; i++){
        // console.log(i);
        if (i % 3 === 0 && i % 5 === 0) {   // multiple of 3 & 5
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {// multiple of 3 & 5
            console.log("buzz")
        } else if (i % 5 === 0) {
            console.log("fizz")
        } else {
            console.log(i)
        }
    }

    // manny way : 먼저 빈 문자변수를 만들고, 3의배수일땐 피즈를 붙이고 5의 배수일땐 버즈를 붙이고 마지막엔 문자변수를 출력하게

})();
