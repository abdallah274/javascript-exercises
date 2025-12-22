//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

//Mind the input validation.

// { 6, 2, 1, 8, 10 } => 16 
// { 1, 1, 11, 2, 3 } => 
// const arr = [  6, 2, 1, 1, 8, 10 ]
// function sumArray(array) {
// let max =  Math.max(...array);
// let min = Math.min(...array);
//  let sum =0;
//  for (let i = 0; i < array.length; i++) {
//    if (array[i] !== max && array[i] !== min) {
//     sum += array[i]
//    }
    
//  }
// return sum;

// }
// function sumArray(array) {
//   return array.sort((a , b) => a -b).slice(1 , -1).reduce((a , b ) => a+b);

// }
// console.log(sumArray(arr));


