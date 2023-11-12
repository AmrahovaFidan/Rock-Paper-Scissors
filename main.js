let rps = ["p", "r", "s"];
let play1Scor = 0;
let play2Scor = 0;


function randomElement(arr) {
    let randomEl = Math.floor(Math.random() * arr.length);
    return arr[randomEl];
}

function isWin(player1Win) {
    if (player1Win) {
        firstWin.innerText = "WIN";
        firstWin.style = "color:darkgreen";
        secoundWin.innerText = "LOSE";
        secoundWin.style = "color:red";
    }
    else {
        firstWin.innerText = "LOSE";
        firstWin.style = "color:red";
        secoundWin.innerText = "WIN";
        secoundWin.style = "color:red";
    }
}

function showRps(p1, p2) {
    firstScore.innerText = `Score:${play1Scor}`;
    secoundScore.innerText = `Score:${play2Scor}`;

    simvol1img.src = `./Assets/${p1}.jpg`;
    simvol2img.src = `./Assets/${p2}.jpg`;
    // function textChange() {
    //     if (firstChoose == "r") {
    //         simvol1.innerText = "Rock";
    //     }
    //     else if (firstChoose == "p") {
    //         simvol1.innerText = "Paper";
    //     }
    //     else if (firstChoose == "s") {
    //         simvol1.innerText = "Sicross";
    //     }
    //     else if (comChoose == "p") {
    //         simvol2.innerText = "Paper";
    //     }
    //     else if (comChoose == "s") {
    //         simvol2.innerText = "Sicross";
    //     }
    //     else if (comChoose == "r") {
    //         simvol2.innerText = "Rock";
    //     }
    // }

}




function startGame(e) {
    let firstChoose = e.key;
    if (!rps.includes(firstChoose)) {
        alert("Zehmet olmasa duzgun herfleri daxil edin: R P S");
        return;
    }


    let comChoose = randomElement(rps);
    console.log("me  ", firstChoose);
    console.log("com  ", comChoose);


    if (
        (firstChoose == "r" && comChoose == "s") ||
        (firstChoose == "p" && comChoose == "r") ||
        (firstChoose == "s" && comChoose == "p")
    ) {
        console.log("Your WIN");
        console.log("Computer LOSE");
        play1Scor = play1Scor + 1;
        showRps(firstChoose, comChoose);
        isWin(true);
    }

    else if (
        (firstChoose == "r" && comChoose == "r") ||
        (firstChoose == "p" && comChoose == "p") ||
        (firstChoose == "s" && comChoose == "s")
    ) {
        console.log("DRAW");
        showRps(firstChoose, comChoose);
    }

    else {
        console.log("Your LOSE");
        console.log("Computer WIN");
        play2Scor = play1Scor + 1;
        showRps(firstChoose, comChoose);
        isWin(false);
    }

}








window.onkeydown = startGame;