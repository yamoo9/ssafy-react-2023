// --------------------------------------------------------------------------
// rest parameters

function sum() {
  const numbers = Array.from(arguments);
  return numbers.reduce((result, number) => result + number, 0);
}

let result1 = sum(2, 3, 9, 12, 105);
console.log(result1);

let result2 = sum(90, 418, -7);
console.log(result2);
