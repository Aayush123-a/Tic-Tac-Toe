console.log("welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let Turn = "X"
let isgameover = false;


//Function to change the turn
const changeturn = () => {

    return Turn === "X" ? "0" : "X"
}

// function to check  for a win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -15, 5, 0],
        [3, 4, 5, -15, 15, 0],
        [6, 7, 8, -15, 25, 0],
        [0, 3, 6, -15, 5, 90],
        [1, 4, 7, -5, 5, 90],
        [2, 5, 8, 5, 5, 90],
        [0, 4, 8, -13, 7, 45],
        [2, 4, 6, 2, 7, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            gameover.play();
            document.querySelectorAll('.imgbox img').forEach(ig => {
                ig.style.width = "200px";
            })
            document.querySelector('.draws').style.width = "0";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw ) rotate(${e[5]}deg)`
        }

    })

    // game draw
    let allfilled = true;
    Array.from(document.getElementsByClassName("boxtext")).forEach(box => {
        if (box.innerText === "") {
            allfilled = false;
        }
    });




    if (!isgameover && allfilled) {
        document.querySelector(".info").innerText = "GAME DRAW";
        isgameover = true;
        document.querySelector('.draws').style.width = "200px";
    }

}

// Game logic


document.addEventListener("click", () => {
    music.play();
});

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = Turn;
            Turn = changeturn();
            audioturn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;

            }


        }
    })
})

// add listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = " ";
    });
    Turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
    document.querySelectorAll('.imgbox img').forEach(ima => {
        ima.style.width = "0px";
    })
})

