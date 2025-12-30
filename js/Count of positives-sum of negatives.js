//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
// 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

//let arr =[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]; //[10 , -65]

// function countPositivesSumNegatives(input) {
//   let countOfPositives =[];
//   let  sumOfNegative =0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] < 0) {
//         sumOfNegative += input[i];
//     } else if (input[i] > 0) {
//       countOfPositives.push(input[i])
//     } 
    
//   }
//   return [countOfPositives.length , sumOfNegative];
// }

/*
 function countPositivesSumNegatives(input) {
 let countOfPositives = input.filter((n) => n > 0).length;
 let sumOfNegative = input.filter((n) => n < 0).reduce((acc , count)=> acc +count , 0)

return [countOfPositives , sumOfNegative];
 } 

console.log(countPositivesSumNegatives(arr)); */

