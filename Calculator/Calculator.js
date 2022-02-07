var numbersArray = [];

var hasEnterdTheNum = false;
function push_array(theNum) {
    if (document.getElementById("theNumber").textContent == "0")
        document.getElementById("theNumber").textContent = "";
    document.getElementById("theNumber").textContent += theNum;

    numbersArray.push(theNum);

    if (numbersArray[0] == `0`) numbersArray = [];
    var index = numbersArray.length - 2;
    var before = numbersArray[index];
    if (theNum == `0` && (before == `0` || before == `+` || before == `-` || before == `*` || before == `/`)) numbersArray = numbersArray.slice(0, -1);

    hasEnterdTheNum = true;

    ///
    console.log(numbersArray);
    ///
}

function erase() {
    var i = numbersArray.length - 1;
    if (i >= 0) {
        if (numbersArray[i] != `+` && numbersArray[i] != `-` && numbersArray[i] != `*` && numbersArray[i] != `/`) {
            numbersArray.splice(i, 1);

            var text = document.getElementById("theNumber").textContent;
            text = text.slice(0, -1);
            document.getElementById("theNumber").textContent = text;
        }
    }

    var text = document.getElementById("theNumber").textContent;
    if (text == "") document.getElementById("theNumber").textContent = "0";

    ///
    console.log(numbersArray);
    ///
}

function operating(operate) {
    if (hasEnterdTheNum == true && numbersArray[numbersArray.length - 1] != `+` && numbersArray[numbersArray.length - 1] != `-` && numbersArray[numbersArray.length - 1] != `*` && numbersArray[numbersArray.length - 1] != `/`) {
        numbersArray.push(operate);

        document.getElementById("theNumber").textContent = "0";
    }

    ///
    console.log(numbersArray);
    ///
}

function makeItRight(num) {
    var array = [];

    var text = num.toString();
    for (item of text) array.push(item);

    var lastIndex = array.length - 1;
    var tempArray = [];
    for (item of array) tempArray.push(item);

    for (var i = 0; i <= lastIndex; i++) array[i] = tempArray[Math.abs(i - lastIndex)];

    var resultText = "";
    for (item of array) resultText += item;

    var result = parseInt(resultText);

    return result;
}

function findTwoNums(op) {
    for (itemIndex in numbersArray) {
        if (numbersArray[itemIndex] == op) {
            var from = itemIndex - 1;
            var to = parseInt(itemIndex) + 1;
            
            var firstNum = -1;
            var secondNum = -1;
    
            var i = 0;
            var j = 0
            
            while(from >= 0 && numbersArray[from] != `+` && numbersArray[from] != `-` && numbersArray[from] != `*` && numbersArray[from] != `/`) {
                firstNum += numbersArray[from] * (10 ** i);
                i++;
                
                from--;
            }
            from++;
    
            while(to < numbersArray.length && numbersArray[to] != `+` && numbersArray[to] != `-` && numbersArray[to] != `*` && numbersArray[to] != `/`) {
                secondNum += numbersArray[to] * (10 ** j);
                j++;
                
                to++;
            }
            
            secondNum = makeItRight(secondNum);
    
            return [firstNum, secondNum, from, to];
        }
    }

    return null;
}

function equals() {
    var firstNum, secondNum, from, to;
    var result = 0;

    while (findTwoNums(`*`) != null) { 
        [firstNum, secondNum, from, to] = findTwoNums(`*`);
        firstNum++;
        secondNum++;

        result = firstNum * secondNum;
        numbersArray.splice(from, to - from);
        
        var resultText = result.toString();

        for (item of resultText) {
            numbersArray.splice(from, 0, item);

            from++;
        }
    }
    console.log(numbersArray);
    while (findTwoNums(`/`) != null) { 
        [firstNum, secondNum, from, to] = findTwoNums(`/`);
        firstNum++;
        secondNum++;

        result = parseInt(firstNum / secondNum);
        numbersArray.splice(from, to - from);
        
        var resultText = result.toString();

        for (item of resultText) {
            numbersArray.splice(from, 0, item);

            from++;
        }
    }
    console.log(numbersArray);
    while (findTwoNums(`+`) != null) { 
        [firstNum, secondNum, from, to] = findTwoNums(`+`);
        firstNum++;
        secondNum++;

        console.log(firstNum, secondNum);

        result = firstNum + secondNum;
        numbersArray.splice(from, to - from);
        
        var resultText = result.toString();

        for (item of resultText) {
            numbersArray.splice(from, 0, item);

            from++;
        }
    }
    console.log(numbersArray);
    while (findTwoNums(`-`) != null) { 
        [firstNum, secondNum, from, to] = findTwoNums(`-`);
        firstNum++;
        secondNum++;

        result = firstNum - secondNum;
        numbersArray.splice(from, to - from);
        
        var resultText = result.toString();

        for (item of resultText) {
            numbersArray.splice(from, 0, item);

            from++;
        }
    }
    console.log(numbersArray);

    document.getElementById("theNumber").textContent = result.toString();

    ///
    console.log(numbersArray);
    ///
}