const addition = function() {
    let args = Array.from(arguments);
    return args.reduce(function (acc, cur) {
        return acc + cur;
    })
}

const subtraction = function(a, ...b){
    let args = Array.from(arguments);
    return args.reduce(function (acc, cur) {
        return acc - cur;
    })
}
const multiplication = function(a, ...b){
    let args = Array.from(arguments);
    return args.reduce(function (acc, cur) {
        return acc * cur;
    })
}
const division = function(a, ...b){
    let args = Array.from(arguments);
    return args.reduce(function (acc, cur) {
        return acc / cur;
    })
}

const operate = function(a, b, c){
    if (a === '/'){
       return division(b, c)
    } else if (a === '*'){
       return multiplication(b, c)
    } else if (a === '-'){
       return subtraction(b, c)
    } else if(a === '+'){
       return addition(b, c)
    
    }}
    


let currentNumber = "";
let previousNumber = "";
let operator = "";

const currentDisplay = document.querySelector('.current_number');
const previousDisplay = document.querySelector('.last_number')

const equal = document.querySelector(".equal")

const deciman = document.querySelector(".decimal")

const clear = document.querySelector("#clearbtn")

const deletebtn = document.querySelector("#deletebtn")

const keys = document.querySelectorAll('.btns');

const operators = document.querySelectorAll('.operators')

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