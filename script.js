let currentNumber = "";
let previousNumber = "";
let operator = "";

window.addEventListener('keydown', (handleKeyPress))
const currentDisplay = document.querySelector('.current_number');
const previousDisplay = document.querySelector('.last_number')

const equal = document.querySelector(".equal")

equal.addEventListener('click', () => {
    if(currentNumber != "" && previousNumber != ""){
        calculate();
}})

const decimal = document.querySelector(".decimal")

decimal.addEventListener('click', addDecimal)

const clear = document.querySelector("#clearbtn")

clear.addEventListener('click', clearing)

const deletebtn = document.querySelector("#deletebtn")

deletebtn.addEventListener('click', deleteLastCharacter)

const keys = document.querySelectorAll('.btns');

const operators = document.querySelectorAll('.operator')

keys.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent)
    })
})

function handleNumber(number) {
    if(currentNumber.length<= 11) {
        currentNumber += number;
        currentDisplay.textContent = currentNumber;
    }
}


operators.forEach(btn => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent)
    })})


function handleOperator(op) {
    operator = op;
    if(previousNumber != ""){
        calculate()
    }
    previousNumber = currentNumber;
    previousDisplay.textContent = previousNumber + " " + operator;
    currentNumber = "";
    currentDisplay.textContent = "";

}

function calculate() {
    previousNumber = Number(previousNumber)
    currentNumber = Number(currentNumber)
    if (operator === "+") {
        currentNumber = previousNumber + currentNumber;
    } else if(operator === "-") {
        currentNumber = previousNumber - currentNumber;
    } else if(operator === "×") {
        currentNumber = previousNumber * currentNumber;
    } else if(operator === "÷" && currentNumber <= 0) {
        previousNumber = "JOE BIDEN DOES"
        previousDisplay.textContent = previousNumber;
        currentNumber =  "NOT ALLOW THIS"
        currentDisplay.textContent = currentNumber;
        return;
    } else if(operator === "÷"){
        currentNumber = previousNumber / currentNumber; 
    }
    previousDisplay.textContent = ""
    previousNumber = ""
    currentNumber = String(currentNumber)
    currentDisplay.textContent = currentNumber
}

function clearing() {
    previousDisplay.textContent = "";
    currentDisplay.textContent = "";
    currentNumber = "";
    previousNumber = "";
    operator = "";
}

function deleteLastCharacter() {
    if (currentNumber.length === 0) {
        currentNumber = previousNumber + " " + operator;
        currentDisplay.textContent = currentNumber + " " + operator;
        previousDisplay.textContent = "";
    }
    currentNumber = currentNumber.slice(0, -1)
    currentDisplay.textContent = currentNumber;
} 

function addDecimal() {
    if(!currentNumber.includes(".")){
        currentNumber = currentNumber + "."
        currentDisplay.textContent = currentNumber;
    }
}

function handleNumber(number) {
    if (previousNumber !== "" && currentNumber !== "" && operator === "") {
      previousNumber = "";
      currentDisplay.textContent = currentNumber;
    }
    if (currentNumber.length <= 11) {
      currentNumber += number;
      currentDisplay.textContent = currentNumber;
    }
  }

  function handleKeyPress(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
      handleNumber(e.key);
    }
    if (
      e.key === "Enter" ||
      (e.key === "=" && currentNum != "" && previousNum != "")
    ) {
      calculate();
    }
    if (e.key === "+" || e.key === "-") {
      handleOperator(e.key);
    }
    if(e.key === "/") {
        handleOperator('÷')
    }
    if (e.key === "*") {
      handleOperator("×");
    }
    if (e.key === ".") {
      addDecimal();
    }
    if (e.key === "Backspace") {
      deleteLastCharacter();
    }
  }

    
