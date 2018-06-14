// Assign variables for the individual number keys, and the operators
// Assign an array of operators in strings to a variable called operatorArray
// Declare a variable called decimalAdded, and assign it to a false value

// Detect keypress for each key and operator when clicked and create a function
// to contain the event listener for the keypress

// Do the same: to detect mouse clicks on each key when clicked, use event listeners

// An example of how addition should work
// When a number key is pressed, (eg: 1) followed by an operator (eg: +),
// and another number key is pressed (eg: 2), finally followed by the = equal sign,
// the addition of these 2 sums should be reflected on the output

// When the C Clear button is pressed, erase everything on the output screen

var container = document.getElementById("container");
var output = document.getElementById("output");

function num1Appear(num1) {
    var number1 = document.getElementById("num1").textContent;
    output.textContent += number1;
}

function num2Appear(num2) {
    var number2 = document.getElementById("num2").textContent;
    output.textContent += number2;
}

function num3Appear(num3) {
    var number3 = document.getElementById("num3").textContent;
    output.textContent += number3;
}

function num4Appear(num4) {
    var number4 = document.getElementById("num4").textContent;
    output.textContent += number4;
}

function num5Appear(num5) {
    var number5 = document.getElementById("num5").textContent;
    output.textContent += number5;
}

function num6Appear(num6) {
    var number6 = document.getElementById("num6").textContent;
    output.textContent += number6;
}

function num7Appear(num7) {
    var number7 = document.getElementById("num7").textContent;
    output.textContent += number7;
}

function num8Appear(num8) {
    var number8 = document.getElementById("num8").textContent;
    output.textContent += number8;
}

function num9Appear(num9) {
    var number9 = document.getElementById("num9").textContent;
    output.textContent += number9;
}

function num0Appear(num0) {
    var number0 = document.getElementById("num0").textContent;
    output.textContent += number0;
}

function numDotAppear(numdot) {
    var numberDot = document.getElementById("num-dot").textContent;
    output.textContent += numberDot;
}

function numPlusAppear(operatorPlus) {
    var operPlus = document.getElementById("operatorPlus").textContent;
    output.textContent += operPlus;
}

function numMinusAppear(operatorMinus) {
    var operMinus = document.getElementById("operatorMinus").textContent;
    output.textContent += operMinus;
}

function numMultiplyAppear(operatorMultiply) {
    var operMultiply = document.getElementById("operatorMultiply").textContent;
    output.textContent += operMultiply;
}

function numDivideAppear(operatorDivide) {
    var operDivide = document.getElementById("operatorDivide").textContent;
    output.textContent += operDivide;
}

var equalBtn = document.getElementById("equal-key");

function operationOfNums() {
    if (numPlusAppear || numMinusAppear || numMultiplyAppear || numDivideAppear) {
        var equation = output.textContent;
        equation = eval(equation.replace(/x/g, '*').replace(/÷/g, '/'));
        // console.log(equation);
        output.textContent = equation;
    }
}

equalBtn.addEventListener("click", operationOfNums);


container.addEventListener("click", function(event) {
    var target = event.target;

    // determine which number was pressed with an if statement
    if (target.id === "num1") {
        num1Appear();
    } else if (target.id === "num2") {
        num2Appear();
    } else if (target.id === "num3") {
        num3Appear();
    } else if (target.id === "num4") {
        num4Appear();
    } else if (target.id === "num5") {
        num5Appear();
    } else if (target.id === "num6") {
        num6Appear();
    } else if (target.id === "num7") {
        num7Appear();
    } else if (target.id === "num8") {
        num8Appear();
    } else if (target.id === "num9") {
        num9Appear();
    } else if (target.id === "num0") {
        num0Appear();
    } else if (target.id === "num-dot") {
        numDotAppear();
    } else if (target.id === "operatorPlus") {
        numPlusAppear();
    } else if (target.id === "operatorMinus") {
        numMinusAppear();
    } else if (target.id === "operatorMultiply") {
        numMultiplyAppear();
    } else if (target.id === "operatorDivide") {
        numDivideAppear();
    }
});


var clearBtn = document.getElementById("clear-btn");

function removeAllNumKeys() {
    output.textContent = "";
}

clearBtn.addEventListener("click", removeAllNumKeys);
