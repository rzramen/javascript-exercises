const removeFromArray = function(arr, ...toRemove) {
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--){
        if (toRemove.includes(arr[i])){
            arr.splice(i, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
