const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	  let sum = 0;
  numbers.forEach((num) => sum += Number(num));
  
  return sum;
};

const multiply = function(numbers) {
  let total = 1;

  numbers.forEach((num) => total *= num);

  return total;
};

const power = function(num1, num2) {
  return Math.pow(num1,num2);
};

const factorial = function(num) {
	let total = 1;

  for(let i = num; i >=1 ; i--){
    total *= i;
  }

  return total;
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
