const sumAll = function(num1, num2) {
    if (!(Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0)){
        return 'ERROR';
    }
    let res = 0;
    let larger = num1 > num2 ? num1 : num2;
    let smaller = num1 < num2 ? num1 : num2;
    for (let i = smaller; i <= larger; i++){
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
