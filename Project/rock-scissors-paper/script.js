
// if page is loaded
window.addEventListener("load", function(){

    let usrPick, comPick;
    let buttons = Array.from(document.querySelectorAll(".usr-btn"));

    // USER : change the img depends on the selected button
    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            let usrImage = document.getElementById("user-pic");
            usrPick =button.getAttribute("value");
            usrImage.setAttribute("src","image/"+usrPick+".png");
            if(usrPick && comPick){
                compare()
            }
        });
    });

    // COMPUTER : change the img randomly
    document.getElementById("com-pick").addEventListener("click", function(){
        console.log("clicked");
        let comImage = document.getElementById("com-pic");
        let option = ["rock","scissors","paper"];
        comPick = option[Math.floor(Math.random() * option.length)];
        comImage.setAttribute("src","image/"+comPick+".png");
        if(usrPick && comPick){
            compare()
        }
    });

    // Compare
    function compare() {
        console.log("Let's see...");
        console.log(usrPick, comPick);

        if (usrPick === comPick) {
            document.getElementById("result").innerHTML = "Draw! Try again";
        } else if (
            (usrPick === "rock" && comPick === "scissors") ||
            (usrPick === "scissors" && comPick === "paper") ||
            (usrPick === "paper" && comPick === "rock")
        ) {
            document.getElementById("result").innerHTML = "You win!";
            document.getElementById("player").style.background = "#FF1654";
        } else {
            document.getElementById("result").innerHTML = "Computer wins!";
            document.getElementById("computer").style.background = "#FF1654";
        }

        document.getElementById("com-pick").disabled = true;
        buttons.forEach((button)=>(button.disabled = true));

        document.getElementById("reset").style.backgroundColor = "#FF1654";

        // COMPUTER : change the img randomly
        document.getElementById("com-pick").addEventListener("click", function () {
            console.log("clicked");
            let comImage = document.getElementById("com-pic");
            let option = ["rock", "scissors", "paper"];
            comPick = option[Math.floor(Math.random() * option.length)];
            comImage.setAttribute("src", "image/" + comPick + ".png");
            if (usrPick && comPick) {
                compare()
            }
        });

        document.getElementById("reset").addEventListener("click", function () {
            location.reload();
        });

    }
});