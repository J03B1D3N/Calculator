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
    }
}

console.log(operate('/', 10, 5))

