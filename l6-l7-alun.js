// Task 1 - find sum of all number in 2 arrays
const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
let sum1= 0;
let sum2 = 0;
// 343 + 396
//export 
// function sumNumsInArrays() {
//     for (let i = 0; i < arrayNums1.length; i++) {
//         sum1 += arrayNums1[i];
//         //console.log (sum1);
//     }
//     for (let j = 0; j < arrayNums2.length; j++) {
//         sum2 += arrayNums2[j];
//         //console.log(sum2);
//     }
//     return (sum1 + sum2);
// }
//sumNumsInArrays(arrayNums1,arrayNums2);
//console.log(sumNumsInArrays());
function SumNumsInArrays () {
    //const resArr = arrayNums1.concat(arrayNums2);
    let sum1 = 0; 
    let sum2 = 0;
    for (let i = 0; i<arrayNums1.length; i++) {
        sum1 += arrayNums1[i];
        sum2 += arrayNums2[i];
    }
    return sum1 + sum2;
}
SumNumsInArrays(arrayNums1, arrayNums2);
console.log(SumNumsInArrays());

// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
const n = 22;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

//export 
function printEvenNumbers() {
    let str = '';
    for (let i = 1; i <= n; i ++) {
        if (i % 2 === 0) {
        str += i + ', '
        }
    }
    return str.slice(0, -2);
}
console.log(printEvenNumbers());


// Task 3 - Using a 'for' loop output the elements in reverse order
const arr = [
   43, "what", 9, true, "cannot", false, "be", 3, true
 ];

//export
let revArr = [];  
function reverseArrayItems(arr) {    
    for (let i = 0; i < arr.length; i++) {
        revArr[arr.length - 1 - i] = arr[i];   
    }
    return revArr;
}
reverseArrayItems(arr)
console.log(revArr);

// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
let array1   = [4, 6, 7];
let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
//export 
let newArr = [];
function sumNumsSamePosition() {
    for (let i = 0; i < array1.length; i++) {
        newArr[i] = array1[i] + array2[i];
    }
    return newArr;
}
sumNumsSamePosition(array1, array2);
console.log(newArr);

// Task 5 - find sum of all number in array using 'while' loop
//export 
function sumNums() {
    let sum = 0;
    let i = 0;
    while (i < array1.length) {
        sum += array1[i];
        i++;
    }
    return sum;
}
sumNums(array1);
console.log(sumNums());

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length >= 4 and without the word 'error'
const strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error']
//export 
let filterArr = [];
function filterArrayWithStrings() {  
  for (let i = 0; i < strArr.length; i++) {
    if (!strArr[i].includes("error") && strArr[i].length >= 4) {
      filterArr.push(strArr[i]);
    }
  }
  return filterArr;
}
filterArrayWithStrings(strArr);
console.log(filterArrayWithStrings());

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
//export 
//let n = 5;
function factorial(n) {
    let f = 1;
  for (let i = 1; i <= n; i++) {
    f = f * i;
  }
  return f;
};
factorial(5);
console.log(factorial(5));

//https://codesandbox.io/s/js-arrays-tasks-6-7-forked-y3rnzt
//https://codesandbox.io/s/js-arrays-tasks-6-7-forked-hxhvbl?file=/src/tasksWithArrayMethods.js
//https://codesandbox.io/s/js-arrays-tasks-6-7-forked-hxhvbl?file=/src/tasksWithLoops.js

// Task 1 - sort an array with numbers
const arrayNumbs = [7,101,3,1,9,11,100,111]
//export 
function sortArray() {
    let arr = arrayNumbs.sort(function (a, b) {
      return a - b;
    });
    return arr;
  }
  sortArray(arrayNumbs);
  console.log(sortArray());
  

  
  // Task 2 - filter an array of strings and keep only
  // a string, that doesn't contain the word 'test'
  // const stringsArray = [
  //   'one-test', 'cat', 'parrot',
  //   'banana', 'test-dog', 'dog'
  // ]
//  export function filterStringsArray(array) {}
  
  // Task 3 - find sum of numbers in array using .reduce()
  // const numsArray = [
  //   1, 3, 5, 10, 19, 100, 200, 33,
  // ]
//  export function sumNumbersInArray(array) {}
  
  // Task 4 - filter items, where a > 5 and extend with
  // new field *sum* with value a + b
  // const arrayItems = [
  //   { a: 1, b: 3 },
  //   { a: 3, b: 3 },
  //   { a: 6, b: 3 },
  //   { a: 10, b: 10 },
  //   { a: 41, b: 1 },
  //   { a: 0, b: 4 }
  // ];
//  export function filterAndExtendArrayItems(array) {}
  
  // Task 5 - merge arrays and remove duplicates
  // const arNum = [1, 2, 3, 4, 5, 6];
  // const arNum2 = [15, 6, 3, 20, 11];
//  export function mergeArraysWithoutDuplicates(array1, array2) {}
  // Task 1 - sort an array with numbers
// const arrayNums = [7,101,3,1,9,11,100,111]
// export function sortArray(array) {
//     let arr = array.sort(function (a, b) {
//       return a - b;
//     });
//     return arr;
//   }
  
  // Task 2 - filter an array of strings and keep only
  // a string, that doesn't contain the word 'test'
  // const stringsArray = [
  //   'one-test', 'cat', 'parrot',
  //   'banana', 'test-dog', 'dog'
  // ]
//   export function filterStringsArray(array) {
//     array = array.filter((name) => !name.includes("test"));
//     return array;
//   }
  // Task 3 - find sum of numbers in array using .reduce()
  // const numsArray = [
  //   1, 3, 5, 10, 19, 100, 200, 33,
  // ]
//   export function sumNumbersInArray(array) {
//     let result = array.reduce(function (sum, current) {
//       return sum + current;
//     });
//     console.log(result);
//     return result;
//   }
  
  // Task 4 - filter items, where a > 5 and extend with
  // new field *sum* with value a + b
  // const arrayItems = [
  //   { a: 1, b: 3 },
  //   { a: 3, b: 3 },
  //   { a: 6, b: 3 },
  //   { a: 10, b: 10 },
  //   { a: 41, b: 1 },
  //   { a: 0, b: 4 }
  // ];
//   let filterArrExt = [];
//   export function filterAndExtendArrayItems(items) {
//     for (let i = 0; i < items.length; i++) {
//       if (items[i].a > 5) {
//         filterArrExt.push({
//           a: items[i].a,
//           b: items[i].b,
//           sum: items[i].a + items[i].b
//         });
//       }
//     }
//     return filterArrExt;
//   }
  
  // Task 5 - merge arrays and remove duplicates
  // const arNum = [1, 2, 3, 4, 5, 6];
  // const arNum2 = [15, 6, 3, 20, 11];
//   export function mergeArraysWithoutDuplicates(array1, array2) {
//     let uniq = [];
//     array1.concat(array2).forEach((element) => {
//       if (!uniq.includes(element)) uniq.push(element);
//     });
//     return uniq;
//   }
  
// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
// const arrayItems = [
//   { a: 1, b: 3 },
//   { a: 3, b: 3 },
//   { a: 6, b: 3 },
//   { a: 10, b: 10 },
//   { a: 41, b: 1 },
//   { a: 0, b: 4 }
// ];
// //let filterArrExt = [];
// export function filterAndExtendArrayItems(items) {
//   // for (let i = 0; i < items.length; i++) {
//   //   if (items[i].a > 5) {
//   //     filterArrExt.push({
//   //       a: items[i].a,
//   //       b: items[i].b,
//   //       sum: items[i].a + items[i].b
//   //     });
//   //   }
//   // }
//   let filterArrExt = items
//     .filter((items) => items.a >= 5)
//     .map((items) => {
//       items.sum = items.a + items.b;
//       return items;
//     });
//   return filterArrExt;
// }
