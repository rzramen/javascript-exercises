const reverseString = function(str) {
    let strlen = str.length - 1;
    let res = '';
    for (strlen; strlen >= 0; strlen--){
        res += str.at(strlen);
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
