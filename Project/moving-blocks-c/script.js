var KEY_ENTER = 13;

var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;


var player = document.getElementById("player");



/* If page is loaded,
   #announcement & #btn-start in #general-status will catch the user's eye;
    - #announcement p = blinking text effect
    - #btn-start = size bigger
*/

/* If #btn-start is clicked || Enter key is pressed
   Start the game!
    - Prepare 3 lives
    - Time starts to be counted
    - Get player and enemies ready to play
*/
document.getElementById("btn-start").addEventListener("click", gameStart);

function gameStart(){
    // Prepare 3 lives
    let lives = 3;

    // Time starts to be counted
    let time = 0;
    setInterval(function(){
        time++;
        document.getElementById("time").innerHTML = time + " sec";
    },1000)

}



/* How to make the player and enemies ready to play
    - move player square using the arrow keys.
    - enemies move randomly around the screen.
    - hit => loses a life => no life = loses the game
*/


/*

console.log(player.top, player.right, player.bottom, player.left);
console.log(player.left, typeof(player.left));
console.log(player);
console.log(player.left, typeof(player.left));
*/
player.style.top = '300px';
player.style.left = '300px';

document.addEventListener('keydown', function(e){

    switch (e.keyCode) {
        case KEY_ENTER:
            console.log("Enter");
            break;
        case KEY_UP:
            console.log("Up");
            player.style.position = "absolute";
            player.style.top = (player.style.top -10)+'px';

            break;
        case KEY_RIGHT:
            console.log("Right");
            player.style.position = "absolute";
            console.log(player.style.left);
            player.style.left = (player.style.left +10)+'px';
            console.log(player.style.left);
            break;
        case KEY_DOWN:
            console.log("Down");
            player.style.position = "absolute";
            player.style.top = (player.style.top +10)+'px';
            break;
        case KEY_LEFT:
            console.log("Left");
            player.style.position = "absolute";
            player.style.left = (player.style.left -10)+'px';

            break;
    }
});

document.addEventListener('keyup', function(e){

    switch (e.keyCode) {
        case KEY_ENTER:
            console.log("-Enter");
            gameStart();
            break;
        case KEY_UP:
            console.log("-Up");
            break;
        case KEY_RIGHT:
            console.log("-Right");
            break;
        case KEY_DOWN:
            console.log("-Down");
            break;
        case KEY_LEFT:
            console.log("-Left");
            break;
    }
});







/* If player loses the game,
    - show the time
    - display try again & reset in #general-status
*/