const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = (a, b) => {
    return a * b;

};

const divide = (a, b) => {
    return a / b;
};

const modulus = (a, b) => {
    return a % b;
};

const even = (a, b) => {
    if(modulus(a, b) == 0){
        return true;
    }else {
        return false;
    }
};

const odd = (a, b) => {
    if(modulus(a, b) == 0){
        return false;
    }else {
        return true

    }
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
