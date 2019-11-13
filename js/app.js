// variables
const containerGame = document.querySelector('#container');
const btnStartLeft = document.querySelector('#btn-start-left');
const btnStartRight = document.querySelector('#btn-start-right');
const btnChoiceLvlLeft = document.querySelector('#btn-lvl-left');
const btnChoiceLvlMiddleFirst = document.querySelector('#btn-lvl-middle-first');
const btnChoiceLvlMiddleSecond = document.querySelector('#btn-lvl-middle-second');
const btnChoiceLvlMiddleThird = document.querySelector('#btn-choice-middle-third');
const btnChoiceLvlRight = document.querySelector('#btn-lvl-right');
const startContainer = document.querySelector('#start-conatiner'); 
const lvlChoiceContainer = document.querySelector('#choiceLvl');
const result = document.querySelector('h4');
const turnBoard = document.querySelector('#turn');
const suffledTurn = Math.floor(Math.random() * 2);
const btn = document.querySelector('#btn-end');
let lvl = 1; // 1-3
let turn = suffledTurn == 0 ? 'x' : 'o';
let isComputerMove = false;
let firstComputerMove = true;
let whereMove = 4;
let board = [ // 'p' = puste, 'x' = X, 'o' = O 'locked' = locked
    'p','p','p',
    'p','p','p',
    'p','p','p',
];

function insertImages(src,id) {
    id.innerHTML = `<img src="${src}" alt="">`;
}

function insertSmallImg(src) {
    insertImages(`img/${src}small.bmp`, turnBoard);
}

function start() {
    btnStartLeft.addEventListener('click', () => {
        startContainer.classList.add('hide');
        containerGame.classList.remove('hide');
        insertSmallImg(turn);
        bindEventClick2v2();
    });
    btnStartRight.addEventListener('click', () => {
        startContainer.classList.add('hide');
        choiceLevel();
    });
}

function finishGame(what) {
    turn = 'x';
    const UpperCaseWhat = what.toUpperCase();
    if(what == 'remis') result.innerHTML = 'REMIS!!!';
    else result.innerHTML = `WYGRAŁ GRACZ: '${UpperCaseWhat}'`;

    for(let i=0; i<board.length; i++) {
        board[i] = 'locked'
        let poleId = document.querySelector(`#pole${i}`);
        poleId.style.cursor = "default";
    }
}

function check(turn, poleId) {
    if (board[0] == turn && board[1] == turn && board[2] == turn || board[3] == turn && board[4] == turn && board[5] == turn ||
        board[6] == turn && board[7] == turn && board[8] == turn || board[0] == turn && board[4] == turn && board[8] == turn ||
        board[2] == turn && board[4] == turn && board[6] == turn || board[0] == turn && board[3] == turn && board[6] == turn ||
        board[1] == turn && board[4] == turn && board[7] == turn || board[2] == turn && board[5] == turn && board[8] == turn) finishGame(turn);

    else if(board[0] !== 'p' && board[1] !== 'p' && board[2] !== 'p' && 
            board[3] !== 'p' && board[4] !== 'p' && board[5] !== 'p' &&
            board[6] !== 'p' && board[7] !== 'p' && board[8] !== 'p') finishGame('remis');
}
////////////start
function toggleClass() {
    lvlChoiceContainer.classList.add('hide');
    containerGame.classList.remove('hide');
    insertSmallImg(turn);
    bindEventClickComputer();
}

function choiceLevel() {
    lvlChoiceContainer.classList.remove('hide');
    turn = 'x';

    btnChoiceLvlLeft.addEventListener('click', () => {
        lvl = 1;
        toggleClass();
    });
    btnChoiceLvlMiddleFirst.addEventListener('click', () => {
        lvl = 2;
        toggleClass();
    });
    btnChoiceLvlMiddleSecond.addEventListener('click', () => {
        lvl = 3;
        toggleClass();
    });
    btnChoiceLvlMiddleThird.addEventListener('click', () => {
        lvl = 4;
        toggleClass();
    });
    btnChoiceLvlRight.addEventListener('click', () => {
        lvl = 5;
        toggleClass();
    });
}

btn.addEventListener('click', () => location.reload());

window.onload = start;