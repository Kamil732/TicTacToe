function bindEventClick2v2() {
    for(let i=0; i<board.length; i++) {
        let poleId = document.getElementById(`pole${i}`);

        poleId.addEventListener('click', function() {        
            if(turn === 'o' && board[i] === 'p' && board[i] !== 'locked') {
                // console.log(this);
                insertImages("img/o.bmp",this);
                board[i] = turn;
                turn = 'x';
                check('o');
            } else if(turn === 'x' && board[i] === 'p' && board[i] !== 'locked') {
                insertImages('img/x.bmp',this);
                board[i] = turn;
                turn = 'o';
                check('x');
            }
            // setSmallImg();
            insertSmallImg(turn);
            this.style.cursor = "default";
        });
    }
}

function bindEventClickComputer() {
    for(let i=0; i<board.length; i++) {
        let poleId = document.getElementById(`pole${i}`);

        poleId.addEventListener('click', function() {     
            if(board[i] === 'p' && isComputerMove == false) {
                insertImages("img/x.bmp",this);
                board[i] = turn;
                check('x');
                turn = 'o';   
                insertImages(`img/${turn}small.bmp`, turnBoard);
                this.style.cursor = "default";

                isPlayerMove = false;
                if(!isPlayerMove) computerMove();
            }
            
            insertSmallImg(turn);
            this.style.cursor = "default";
        });
    }
}