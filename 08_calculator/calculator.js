const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let res = arr.reduce((sum, curr) => sum + curr, 0);
  return res;
};

const multiply = function(arr) {
  let res = arr.reduce((sum, curr) => sum * curr, 1);
  return res;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0 || n === 1){
    return 1;
  }
  return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
