let selectedCellId;
let turn = 0;
let firstSelectedExist = false;
let rowArray = "";

function getCellId(number){
    return "cell" + number;
}
function getButtonId(number){
    return "button" + number;
}

function selectNumber(cellNumber) {
    if (document.getElementById("turn_text").textContent != "Player 1 won!" && document.getElementById("turn_text").textContent != "Player 2 won!") {
        if (document.getElementById(getCellId(cellNumber)).textContent == "-") {
            if (firstSelectedExist == false) {
                selectedCellId = getCellId(cellNumber);
                firstSelectedExist = true;
                document.getElementById("selected_text").textContent = "Selected!";
            } else {
                document.getElementById("selected_text").textContent = "You've selected before.";
            }
        }else if (firstSelectedExist == true){
            document.getElementById("selected_text").textContent = "You've selected before."
        }else {
            document.getElementById("selected_text").textContent = "Select another.";
        }
    }
}

function changeTurn() {
    //changing turn variable
    if (turn == 0) {
        turn = 1;
    } else {
        turn = 0;
    }
    //changing turn text
    if (document.getElementById("turn_text").textContent == "Player 1:") {
        document.getElementById("turn_text").textContent = "Player 2:";
    } else {
        document.getElementById("turn_text").textContent = "Player 1:";
    }

}

function puttingNumber() {
    if (document.getElementById("turn_text").textContent != "Player 1 won!" && document.getElementById("turn_text").textContent != "Player 2 won!") {
        let the_number;
        if (turn == 0) {
            the_number = 0;
        } else {
            the_number = 1;
        }
        document.getElementById(selectedCellId).textContent = the_number;
        document.getElementById("selected_text").textContent = "";
        firstSelectedExist = false;
        changeTurn();
        winCheck();
    }
}

function winCheck() {
    
    function win() {
        if (rowArray == "000") {
            document.getElementById("turn_text").textContent = "Player 1 won!"
        } else if (rowArray == "111") {
            document.getElementById("turn_text").textContent = "Player 2 won!"
        } else {
            rowArray = "";
        }
    }
    
    //row check
    for (let i = 1; i <= 9; i += 3) {
        for (let j = i; j <= i + 2; j++) {
            rowArray += document.getElementById(getCellId(j)).textContent;
        }
        win();
    }
    //column check
    for (let i = 1; i <= 3; i++) {
        for(let j = i; j <= 9; j += 3) {
            rowArray += document.getElementById(getCellId(j)).textContent;
        }
        win();
    }
    //diameter check
    function getCellText(cellId) {
        return document.getElementById(getCellId(cellId)).textContent;
    }
    rowArray = getCellText(1) + getCellText(5) + getCellText(9)
    win();
    rowArray = getCellText(3) + getCellText(5) + getCellText(7)
    win();
}