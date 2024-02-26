/* Problem2 - Create a function that accepts an array of numbers. 
In this function, the numbers must be multiplied by itself and add 2, 
and return a new array containing only the resulting numbers that are divisible by 3.
*/

function divisibleBy(numbers, divisor) {
  // return each number that is divisible by the divisor
  return numbers
    .map((num) => num * num + 2)
    .filter((num) => num % divisor === 0);
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6, 7], 3));
// Return [ 3, 6, 18, 27, 51 ]
