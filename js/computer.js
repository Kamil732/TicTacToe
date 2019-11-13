function computerMove() {
    setTimeout(() => {
        isComputerMove = true;
        let randomPlace = Math.floor(Math.random()* board.length);

        if(firstComputerMove && isComputerMove == true) {
            if(board[4] == 'x') whereMove = randomPlace;
        } else if(!firstComputerMove) whereMove = randomPlace;

        if(board[randomPlace] == 'x' || board[randomPlace] == 'o') {
            computerMove();
            isComputerMove = false;
        }

        if(lvl == 5 && isComputerMove == true) {
            //////////////////////////////////////////WYJĄTKI///////////////////////////////////////////
            if(board[0] == 'x' && board[8] == 'x' && board[4] == 'o' && board[1] == 'p' && turn == 'o'|| board[2] == 'x' && board[6] == 'x' && board[4] == 'o' && board[1] == 'p' && turn == 'o') whereMove = 1;
            else if(board[4] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;
            else if(board[0] == 'x' && board[4] == 'x' && board[8] == 'o' && board[6] == 'p' && turn == 'o')  whereMove = 6;
            else if(board[0] == 'x' && board[5] == 'x' && board[4] == 'o' && board[2] == 'p' && board[6] != 'x' && turn == 'o') whereMove = 2;
            else if(board[2] == 'x' && board[3] == 'x' && board[0] == 'p' && board[4] == 'o' && board[8] != 'x' && turn == 'o') whereMove = 0;
            else if(board[6] == 'x' && board[5] == 'x' && board[4] == 'o' && board[8] == 'p' && turn == 'o') whereMove = 8;
            else if(board[8] == 'x' && board[3] == 'x' && board[4] == 'o' && board[6] == 'p' && board[2] != 'x' &&turn == 'o') whereMove = 6;
            ///////////////////////////////////////////" X "////////////////////////////////////////////
            if(board[0] == 'x' && board[4] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;
            if(board[2] == 'x' && board[5] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;
            if(board[6] == 'x' && board[7] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;

            if(board[6] == 'x' && board[8] == 'x' && board[7] == 'p' && turn == 'o') whereMove = 7;
            if(board[1] == 'x' && board[4] == 'x' && board[7] == 'p' && turn == 'o') whereMove = 7;

            if(board[0] == 'x' && board[3] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;
            if(board[7] == 'x' && board[8] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;
            if(board[2] == 'x' && board[4] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;

            if(board[2] == 'x' && board[8] == 'x' && board[5] == 'p' && turn == 'o') whereMove = 5;
            if(board[3] == 'x' && board[4] == 'x' && board[5] == 'p' && turn == 'o') whereMove = 5;

            if(board[0] == 'x' && board[8] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
            if(board[1] == 'x' && board[7] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
            if(board[2] == 'x' && board[6] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
            if(board[3] == 'x' && board[5] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;

            if(board[0] == 'x' && board[6] == 'x' && board[3] == 'p' && turn == 'o') whereMove = 3;
            if(board[4] == 'x' && board[5] == 'x' && board[3] == 'p' && turn == 'o') whereMove = 3;

            if(board[0] == 'x' && board[1] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;
            if(board[8] == 'x' && board[5] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;
            if(board[6] == 'x' && board[4] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;

            if(board[0] == 'x' && board[2] == 'x' && board[1] == 'p' && turn == 'o') whereMove = 1;
            if(board[4] == 'x' && board[7] == 'x' && board[1] == 'p' && turn == 'o') whereMove = 1;

            if(board[3] == 'x' && board[6] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;
            if(board[1] == 'x' && board[2] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;
            if(board[4] == 'x' && board[8] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;

            ///////////////////////////////////////////" O "////////////////////////////////////////////
            if(board[0] == 'o' && board[4] == 'o' && board[8] == 'p' && turn == 'o')  whereMove = 8;
            if(board[2] == 'o' && board[5] == 'o' && board[8] == 'p' && turn == 'o') whereMove = 8;
            if(board[6] == 'o' && board[7] == 'o' && board[8] == 'p' && turn == 'o') whereMove = 8;

            if(board[6] == 'o' && board[8] == 'o' && board[7] == 'p' && turn == 'o') whereMove = 7;
            if(board[1] == 'o' && board[4] == 'o' && board[7] == 'p' && turn == 'o') whereMove = 7;

            if(board[0] == 'o' && board[3] == 'o' && board[6] == 'p' && turn == 'o') whereMove = 6;
            if(board[7] == 'o' && board[8] == 'o' && board[6] == 'p' && turn == 'o') whereMove = 6;
            if(board[2] == 'o' && board[4] == 'o' && board[6] == 'p' && turn == 'o') whereMove = 6;

            if(board[2] == 'o' && board[8] == 'o' && board[5] == 'p' && turn == 'o') whereMove = 5;
            if(board[3] == 'o' && board[4] == 'o' && board[5] == 'p' && turn == 'o') whereMove = 5;

            if(board[0] == 'o' && board[8] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;
            if(board[1] == 'o' && board[7] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;
            if(board[2] == 'o' && board[6] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;
            if(board[3] == 'o' && board[5] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;

            if(board[0] == 'o' && board[6] == 'o' && board[3] == 'p' && turn == 'o') whereMove = 3;
            if(board[4] == 'o' && board[5] == 'o' && board[3] == 'p' && turn == 'o') whereMove = 3;

            if(board[0] == 'o' && board[1] == 'o' && board[2] == 'p' && turn == 'o') whereMove = 2;
            if(board[8] == 'o' && board[5] == 'o' && board[2] == 'p' && turn == 'o') whereMove = 2;
            if(board[6] == 'o' && board[4] == 'o' && board[2] == 'p' && turn == 'o') whereMove = 2;

            if(board[0] == 'o' && board[2] == 'o' && board[1] == 'p' && turn == 'o') whereMove = 1;
            if(board[4] == 'o' && board[7] == 'o' && board[1] == 'p' && turn == 'o') whereMove = 1;

            if(board[3] == 'o' && board[6] == 'o' && board[0] == 'p' && turn == 'o') whereMove = 0;
            if(board[1] == 'o' && board[2] == 'o' && board[0] == 'p' && turn == 'o') whereMove = 0;
            if(board[4] == 'o' && board[8] == 'o' && board[0] == 'p' && turn == 'o') whereMove = 0;

        } else if(lvl == 4 && isComputerMove == true) {
             //////////////////////////////////////////WYJĄTKI///////////////////////////////////////////
             if(board[0] == 'x' && board[8] == 'x' && board[4] == 'o' && board[1] == 'p' && turn == 'o'|| board[2] == 'x' && board[6] == 'x' && board[4] == 'o' && board[1] == 'p' && turn == 'o') whereMove = 1;
             else if(board[4] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;
             ///////////////////////////////////////////" X "////////////////////////////////////////////
             if(board[0] == 'x' && board[4] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;
             if(board[2] == 'x' && board[5] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;
             if(board[6] == 'x' && board[7] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;

             if(board[6] == 'x' && board[8] == 'x' && board[7] == 'p' && turn == 'o') whereMove = 7;
             if(board[1] == 'x' && board[4] == 'x' && board[7] == 'p' && turn == 'o') whereMove = 7;

             if(board[0] == 'x' && board[3] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;
             if(board[7] == 'x' && board[8] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;
             if(board[2] == 'x' && board[4] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;

             if(board[2] == 'x' && board[8] == 'x' && board[5] == 'p' && turn == 'o') whereMove = 5;
             if(board[3] == 'x' && board[4] == 'x' && board[5] == 'p' && turn == 'o') whereMove = 5;

             if(board[0] == 'x' && board[8] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
             if(board[1] == 'x' && board[7] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
             if(board[2] == 'x' && board[6] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
             if(board[3] == 'x' && board[5] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;

             if(board[0] == 'x' && board[6] == 'x' && board[3] == 'p' && turn == 'o') whereMove = 3;
             if(board[4] == 'x' && board[5] == 'x' && board[3] == 'p' && turn == 'o') whereMove = 3;

             if(board[0] == 'x' && board[1] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;
             if(board[8] == 'x' && board[5] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;
             if(board[6] == 'x' && board[4] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;

             if(board[0] == 'x' && board[2] == 'x' && board[1] == 'p' && turn == 'o') whereMove = 1;
             if(board[4] == 'x' && board[7] == 'x' && board[1] == 'p' && turn == 'o') whereMove = 1;

             if(board[3] == 'x' && board[6] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;
             if(board[1] == 'x' && board[2] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;
             if(board[4] == 'x' && board[8] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;

             ///////////////////////////////////////////" O "////////////////////////////////////////////
             if(board[0] == 'o' && board[4] == 'o' && board[8] == 'p' && turn == 'o')  whereMove = 8;
             if(board[2] == 'o' && board[5] == 'o' && board[8] == 'p' && turn == 'o') whereMove = 8;
             if(board[6] == 'o' && board[7] == 'o' && board[8] == 'p' && turn == 'o') whereMove = 8;

             if(board[6] == 'o' && board[8] == 'o' && board[7] == 'p' && turn == 'o') whereMove = 7;
             if(board[1] == 'o' && board[4] == 'o' && board[7] == 'p' && turn == 'o') whereMove = 7;

             if(board[0] == 'o' && board[3] == 'o' && board[6] == 'p' && turn == 'o') whereMove = 6;
             if(board[7] == 'o' && board[8] == 'o' && board[6] == 'p' && turn == 'o') whereMove = 6;
             if(board[2] == 'o' && board[4] == 'o' && board[6] == 'p' && turn == 'o') whereMove = 6;

             if(board[2] == 'o' && board[8] == 'o' && board[5] == 'p' && turn == 'o') whereMove = 5;
             if(board[3] == 'o' && board[4] == 'o' && board[5] == 'p' && turn == 'o') whereMove = 5;

             if(board[0] == 'o' && board[8] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;
             if(board[1] == 'o' && board[7] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;
             if(board[2] == 'o' && board[6] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;
             if(board[3] == 'o' && board[5] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;

             if(board[0] == 'o' && board[6] == 'o' && board[3] == 'p' && turn == 'o') whereMove = 3;
             if(board[4] == 'o' && board[5] == 'o' && board[3] == 'p' && turn == 'o') whereMove = 3;

             if(board[0] == 'o' && board[1] == 'o' && board[2] == 'p' && turn == 'o') whereMove = 2;
             if(board[8] == 'o' && board[5] == 'o' && board[2] == 'p' && turn == 'o') whereMove = 2;
             if(board[6] == 'o' && board[4] == 'o' && board[2] == 'p' && turn == 'o') whereMove = 2;

             if(board[0] == 'o' && board[2] == 'o' && board[1] == 'p' && turn == 'o') whereMove = 1;
             if(board[4] == 'o' && board[7] == 'o' && board[1] == 'p' && turn == 'o') whereMove = 1;

             if(board[3] == 'o' && board[6] == 'o' && board[0] == 'p' && turn == 'o') whereMove = 0;
             if(board[1] == 'o' && board[2] == 'o' && board[0] == 'p' && turn == 'o') whereMove = 0;
             if(board[4] == 'o' && board[8] == 'o' && board[0] == 'p' && turn == 'o') whereMove = 0;

        } else if(lvl == 3 && isComputerMove == true) {
            whereMove = randomPlace;

            if(board[0] == 'x' && board[4] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;
            else if(board[2] == 'x' && board[5] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;
            else if(board[6] == 'x' && board[7] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;

            else if(board[6] == 'x' && board[8] == 'x' && board[7] == 'p' && turn == 'o') whereMove = 7;
            else if(board[1] == 'x' && board[4] == 'x' && board[7] == 'p' && turn == 'o') whereMove = 7;

            else if(board[0] == 'x' && board[3] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;
            else if(board[7] == 'x' && board[8] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;
            else if(board[2] == 'x' && board[4] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;

            else if(board[2] == 'x' && board[8] == 'x' && board[5] == 'p' && turn == 'o') whereMove = 5;
            else if(board[3] == 'x' && board[4] == 'x' && board[5] == 'p' && turn == 'o') whereMove = 5;

            else if(board[0] == 'x' && board[8] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
            else if(board[1] == 'x' && board[7] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
            else if(board[2] == 'x' && board[6] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
            else if(board[3] == 'x' && board[5] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;

            else if(board[0] == 'x' && board[6] == 'x' && board[3] == 'p' && turn == 'o') whereMove = 3;
            else if(board[4] == 'x' && board[5] == 'x' && board[3] == 'p' && turn == 'o') whereMove = 3;

            else if(board[0] == 'x' && board[1] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;
            else if(board[8] == 'x' && board[5] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;
            else if(board[6] == 'x' && board[4] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;

            else if(board[0] == 'x' && board[2] == 'x' && board[1] == 'p' && turn == 'o') whereMove = 1;
            else if(board[4] == 'x' && board[7] == 'x' && board[1] == 'p' && turn == 'o') whereMove = 1;

            else if(board[3] == 'x' && board[6] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;
            else if(board[1] == 'x' && board[2] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;
            else if(board[4] == 'x' && board[8] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;

            ///////////////////////////////////////////" O "////////////////////////////////////////////
            if(board[0] == 'o' && board[4] == 'o' && board[8] == 'p' && turn == 'o') whereMove = 8;
            else if(board[2] == 'o' && board[5] == 'o' && board[8] == 'p' && turn == 'o') whereMove = 8;
            else if(board[6] == 'o' && board[7] == 'o' && board[8] == 'p' && turn == 'o') whereMove = 8;

            else if(board[6] == 'o' && board[8] == 'o' && board[7] == 'p' && turn == 'o') whereMove = 7;
            else if(board[1] == 'o' && board[4] == 'o' && board[7] == 'p' && turn == 'o') whereMove = 7;

            else if(board[0] == 'o' && board[3] == 'o' && board[6] == 'p' && turn == 'o') whereMove = 6;
            else if(board[7] == 'o' && board[8] == 'o' && board[6] == 'p' && turn == 'o') whereMove = 6;
            else if(board[2] == 'o' && board[4] == 'o' && board[6] == 'p' && turn == 'o') whereMove = 6;

            else if(board[2] == 'o' && board[8] == 'o' && board[5] == 'p' && turn == 'o') whereMove = 5;
            else if(board[3] == 'o' && board[4] == 'o' && board[5] == 'p' && turn == 'o') whereMove = 5;

            else if(board[0] == 'o' && board[8] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;
            else if(board[1] == 'o' && board[7] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;
            else if(board[2] == 'o' && board[6] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;
            else if(board[3] == 'o' && board[5] == 'o' && board[4] == 'p' && turn == 'o') whereMove = 4;

            else if(board[0] == 'o' && board[6] == 'o' && board[3] == 'p' && turn == 'o') whereMove = 3;
            else if(board[4] == 'o' && board[5] == 'o' && board[3] == 'p' && turn == 'o') whereMove = 3;

            else if(board[0] == 'o' && board[1] == 'o' && board[2] == 'p' && turn == 'o') whereMove = 2;
            else if(board[8] == 'o' && board[5] == 'o' && board[2] == 'p' && turn == 'o') whereMove = 2;
            else if(board[6] == 'o' && board[4] == 'o' && board[2] == 'p' && turn == 'o') whereMove = 2;

            else if(board[0] == 'o' && board[2] == 'o' && board[1] == 'p' && turn == 'o') whereMove = 1;
            else if(board[4] == 'o' && board[7] == 'o' && board[1] == 'p' && turn == 'o') whereMove = 1;

            else if(board[3] == 'o' && board[6] == 'o' && board[0] == 'p' && turn == 'o') whereMove = 0;
            else if(board[1] == 'o' && board[2] == 'o' && board[0] == 'p' && turn == 'o') whereMove = 0;
            else if(board[4] == 'o' && board[8] == 'o' && board[0] == 'p' && turn == 'o') whereMove = 0;

        } else if(lvl == 2 && isComputerMove == true) {
            whereMove = randomPlace;

            if(board[0] == 'x' && board[4] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;
            else if(board[2] == 'x' && board[5] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;
            else if(board[6] == 'x' && board[7] == 'x' && board[8] == 'p' && turn == 'o') whereMove = 8;

            else if(board[6] == 'x' && board[8] == 'x' && board[7] == 'p' && turn == 'o') whereMove = 7;
            else if(board[1] == 'x' && board[4] == 'x' && board[7] == 'p' && turn == 'o') whereMove = 7;

            else if(board[0] == 'x' && board[3] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;
            else if(board[7] == 'x' && board[8] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;
            else if(board[2] == 'x' && board[4] == 'x' && board[6] == 'p' && turn == 'o') whereMove = 6;

            else if(board[2] == 'x' && board[8] == 'x' && board[5] == 'p' && turn == 'o') whereMove = 5;
            else if(board[3] == 'x' && board[4] == 'x' && board[5] == 'p' && turn == 'o') whereMove = 5;

            else if(board[0] == 'x' && board[8] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
            else if(board[1] == 'x' && board[7] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
            else if(board[2] == 'x' && board[6] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;
            else if(board[3] == 'x' && board[5] == 'x' && board[4] == 'p' && turn == 'o') whereMove = 4;

            else if(board[0] == 'x' && board[6] == 'x' && board[3] == 'p' && turn == 'o') whereMove = 3;
            else if(board[4] == 'x' && board[5] == 'x' && board[3] == 'p' && turn == 'o') whereMove = 3;

            else if(board[0] == 'x' && board[1] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;
            else if(board[8] == 'x' && board[5] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;
            else if(board[6] == 'x' && board[4] == 'x' && board[2] == 'p' && turn == 'o') whereMove = 2;

            else if(board[0] == 'x' && board[2] == 'x' && board[1] == 'p' && turn == 'o') whereMove = 1;
            else if(board[4] == 'x' && board[7] == 'x' && board[1] == 'p' && turn == 'o') whereMove = 1;

            else if(board[3] == 'x' && board[6] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;
            else if(board[1] == 'x' && board[2] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;
            else if(board[4] == 'x' && board[8] == 'x' && board[0] == 'p' && turn == 'o') whereMove = 0;

        } else if(lvl == 1 && isComputerMove == true) whereMove = randomPlace;

        let placeId = document.getElementById(`pole${whereMove}`);

        if(isComputerMove == true && board[whereMove] !== 'locked') {
            insertImages('img/o.bmp', placeId);  
            board[whereMove] = 'o';
            placeId.style.cursor = "default";
            turn = 'x';
            check('o');
            isComputerMove = false;
            firstComputerMove = false;
        }

        insertSmallImg(turn);
    }, 200);
}