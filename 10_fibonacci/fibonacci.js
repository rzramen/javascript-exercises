const fibonacci = function(arg) {
    num = parseInt(arg);

    if (num < 0){
        return 'OOPS';
    }
    if (num === 0){
        return 0;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= num; i++){
        let cur = a + b;
        a = b;
        b = cur;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
