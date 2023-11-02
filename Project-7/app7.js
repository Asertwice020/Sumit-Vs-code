console.log('hello tic tac toe')
// let audioTurn = Audio(cirlcePlayer.mp3)
let turn = `X`
let isgameover = false;

// FUNCTION TO CHANGE THE TURN
const changeTurn = () => {
    return turn === `X`?`O` : `X`;
}

// FUNCTION FOR CHECKWIN
const checkWin = () => {
    let wins = [
        [0 ,1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {

        if( (box_Text[e[0]].innerText === box_Text[e[1]].innerText) && (box_Text[e[2]].innerText === box_Text[e[1]].innerText) && (box_Text[e[0]].innerText !== "") ) {
            document.querySelector('#currentScore').innerText = box_Text[e[0]].innerText + 'WON'
            isgameover = true;
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let box_Text = element.querySelector(`.boxText`);
    element.addEventListener(`click`, () => {
    if(box_Text.innerText === '') {
        box_Text.innerText = turn;
        turn = changeTurn();
        // audioTurn.play();
        checkWin();
        if(isgameover) {
            document.getElementsByClassName(`turn`)[0].innerText = "Turn for" + turn;
        }
    }
    })
})