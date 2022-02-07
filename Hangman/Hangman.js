let words = ['paper' , 'green' , 'hand' , 'book' , 'phone' , 'psychology'];
let displayed_text = document.getElementById("displayed_text").textContent;
let lettersArray = [];
let chance_count = 0;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let random_index = getRandomArbitrary(0,6);
let the_word = words[random_index];

function refresh() {
    document.getElementById("displayed_text").textContent = displayed_text;
    if (9 - chance_count >= 0) {
        document.getElementById("chance_text").textContent = 9 - chance_count;
    }
}

for (letter_index in the_word) {
    displayed_text += " _";
}

displayed_text.trim();
refresh();

console.log(the_word);

function getLettersArray() {
    lettersArray = displayed_text.split(" ");
    lettersArray.shift();
}

function display_refresh() {
    displayed_text = "";
    for (i of lettersArray) {
        displayed_text += (" " + i);
    }
    displayed_text.trim();
}

function correct_check() {
    if (chance_count > 8) {
        let count_incorrect = 0;
        for (letter of lettersArray) {
            if (letter == "_") {
                count_incorrect += 1;
            }
        }
        if (count_incorrect <= 0) {
            document.getElementById("Textbox").textContent = "Congrats*! :)";
        } else {
            document.getElementById("Textbox").textContent = "You've Lost! :(";
        }

    } else {
        let count_incorrect = 0;
        for (letter of lettersArray) {
            if (letter == "_") {
                count_incorrect += 1;
            }
        }
        if (count_incorrect <= 0) {
            document.getElementById("Textbox").textContent = "Congrats*! :)";
        }
    }
}

function check(the_letter) {
    if (chance_count <= 8) {
        getLettersArray();
        for(letter_index in the_word) {
            if(the_word[letter_index] == the_letter) {
                lettersArray[letter_index] = the_letter;
            }
        }
        display_refresh();
        chance_count += 1;
        refresh();
        correct_check();
    }
}
