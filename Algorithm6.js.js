// 6. Get Average

// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

// // Pseudocode
// 1- will define an array of numbers
// 2- will use a forEach() method to iterate over the elements of the array, for each one of them
// 3- and by this method also can add up the values of the array to a new variable
// 4- average = sum % x.length => 40/ 5 = 8
// Coding

// const x = [3, 5, 2, 12, 18];
// let sum = 0;
// x.forEach((val) => {

//     sum += val;
// });

// const average = sum / x.length;
// console.log(average);


const x = [3, 5, 2, 12, 18];
let sum = 0
x.forEach((val) =>  {
  sum += val
}); const avrage= sum / x.length
console.log(avrage)


// Diagram
// 1- forEach(val) => sum+= val which is 0 + 3 = 3
// 2- forEach(val) => sum+= val which is 3 + 5 = 8
// 3- forEach(val) => sum+= val which is 8 + 2 = 10
// 4- forEach(val) => sum+= val which is 10 + 12 = 22
// 5- forEach(val) => sum+= val which is 22 + 18 = 40
// 6-  average = sum % x.length => 40/ 5 = 8