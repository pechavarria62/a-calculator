let trailingResult = 0;
let operationOptions = ['percent','multiply', 'subtract', 'add', 'divide'];
let workingOperation = "";

let updateDisplay = (input) => {
    let display = document.getElementById("display");
    let secondaryDisplay = document.getElementById("secondaryDisplay");
    
    if(display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
        if (input === "decimal") {
            display.innerHTML = "."
        }else if(input === "plus-negative"){
            if (display.innerHTML.indexOf("-1") === -1){
                display.innerHTML = "-" + display.innerHTML;
            }else if (display.innerHTML.indexOf("-1" > -1)){
                display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
            }
        } else {
            display.innerHTML = input;
            
        }
    }else if (operationOptions.indexOf(input) >= 0 ) {

        if (trailingResult === display.innerHTML) {
            //Operand was selected twice
            workingOperation = input;
        }else if (workingOperation === ""){
            workingOperation = input;
            trailingResult = display.innerHTML;
            display.innerHTML = 0;
        } else {
            // Dealing with a set operand
            trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
            secondaryDisplay.innerHTML = trailingResult; 
            display.innerHTML = 0;
            workingOperation = input;
        }
    }else if (input === "equals") {
        display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
        trailingResult = 0;
        workingOperation = ""; 
        secondaryDisplay.innerHTML = trailingResult;
    } else if (input === "decimal") {
        if (display.innerHTML.indexOf(".") === -1){
            display.innerHTML += ".";
        }
    } else if (input === "plus-negative"){
        if (display.innerHTML.indexOf("-1") === -1){
            display.innerHTML = "-" + display.innerHTML;
        }else if (display.innerHTML.indexOf("-1" > -1)){
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
        }
    }else {
        display.innerHTML += input;
    }
}
let clearDisplay = () => {
    let display = document.getElementById("display");
    let secondaryDisplay = document.getElementById("secondaryDisplay");
    trailingResult = 0;
    display.innerHTML = 0;
    secondaryDisplay.innerHTML = trailingResult;
    
}

let calculate = (firstNum, secondNum, operation) => {
    let result;
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    switch(operation) {
        case "add":
            result = firstNum + secondNum;
        break;
        case "subtract":
            result = firstNum - secondNum;
        break;
        case "multiply":
            result = firstNum * secondNum;
        break;
        case "divide":
            result = firstNum / secondNum;
        break; 
        default:
        // code block
        }
        return result.toString();
}