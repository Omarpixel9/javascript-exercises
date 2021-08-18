const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((a, b) => a + b, 0); // Using reduce function rather than a loop greatly reduces number of lines
};

const multiply = function(numbers) {
	return numbers.reduce((a, b) => a * b, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
