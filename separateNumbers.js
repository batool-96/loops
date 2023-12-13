
//separateNumbers.js

function separateNumbersForLoop(arr) {
  const evenArr = [];
  const oddArr = [];

  //gör en for-loop som placerar jämna tal i evenArr
  //och udda tal i oddArr
    function separateNumbersForLoop(array) {
    let even = [];
    let odd = [];
   
    for (let i = 0; i < array.length; i++) {
       if (array[i] % 2 === 0) {
         even.push(array[i]);
       } else {
         odd.push(array[i]);
       }
    }
   
    return [even, odd];
   }
   
   function separateNumbersWhileLoop(array) {
    let even = [];
    let odd = [];
    let i = 0;
   
    while (i < array.length) {
       if (array[i] % 2 === 0) {
         even.push(array[i]);
       } else {
         odd.push(array[i]);
       }
       i++;
    }
   
    return [even, odd];
   }
   
   function separateNumbersDoWhileLoop(array) {
    let even = [];
    let odd = [];
    let i = 0;
   
    do {
       if (array[i] % 2 === 0) {
         even.push(array[i]);
       } else {
         odd.push(array[i]);
       }
       i++;
    } while (i < array.length);
   
    return [even, odd];
   }
   
   function printArray(array) {
    array.forEach(element => {
       console.log(element);
    });
   }
  
   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   let [evens, odds] = separateNumbersForLoop(numbers);
   
   console.log("Even numbers:");
   printArray(evens);
   
   console.log("Odd numbers:");
   printArray(odds);
  return [evenArr, oddArr];
}

/*
implementera funktionerna separateNumbersWhileLoop och  separateNumbersDoWhileLoop.
bägge dessa funktioner ska göra samma sak som separateNumbersForLoop fast med en 
while-loop respektive en Do-While-loop.

implementera också printArray som endast skriver ut innehållet, i konsollen, i arrayen (parameter) med
en foreach-loop.
*/
  

module.exports = {
  separateNumbersForLoop,
  separateNumbersWhileLoop,
  separateNumbersDoWhileLoop,
  printArray,
};
