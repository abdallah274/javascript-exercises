/**
 * Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
 */

//let arr = [1 ,2 ,3  ,5];

/*
function findAverage(array) {
    if (array == 0) return 0
let average = 0;
for (let i = 0; i < array.length; i++) {
 {
       average += array[i]
    }
}
  return average / array.length;
}
*/
/*
function findAverage(array) {
 if (array == 0) return 0
 return array.reduce((acc , curent) => acc + curent ,0) / array.length;
}
 */

console.log(findAverage(arr));
