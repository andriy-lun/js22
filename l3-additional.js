// Task 1 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
 const itemsArray = [
    { a: 7,  b: 5 },
    { a: 10, b: 3 },
    { a: 2,  b: 3 },
    { a: 0,  b: 3 }
  ];
const filterArrExt = [];
function filterAndExtendArrayItems(items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].a > 5) {
            filterArrExt.push({
                a:   items[i].a,
                b:   items[i].b,
                sum: items[i].a + items[i].b           
            });
        }     
    }
    return filterArrExt;
}
console.log(filterAndExtendArrayItems(itemsArray));

// Task 2 - merge arrays and remove duplicates
const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];
let mergeArr = arNum.concat(arNum2)
console.log(mergeArr);
let uniq = [];
mergeArr.forEach(element => {
    if(!uniq.includes(element))
    uniq.push(element);  
});
console.log(uniq);
// no Set() in use please :)

// Task 3 - write a function to check, if a word is a palindrome
// word length / 2
function palindromeCheck (text) {
    if (text === text.split('').reverse().join('')) {
        console.log(text + ' - is the palindrome');
        } else {
            console.log(text + ' - is not the palindrome');
        } 
}
palindromeCheck('abba');


// Task 4 - write a function for n! (factorial) calculation

function fctrl (f) {
    let x = 1;
    for (i = 1; i<=f; i++) {
        x *= i;
    }
    console.log(x);
    return(x);
}
fctrl(3);


//https://codesandbox.io/s/js-interview-tests-forked-b8eqz3?file=/src/testTasks.js

//https://codesandbox.io/s/js-interview-tests-forked-b8eqz3?file=/src/testTasks.js


/*
// Task 1 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
// const itemsArray = [
//   { a: 1, b: 3 },
//   { a: 3, b: 3 },
//   { a: 6, b: 3 },
//   { a: 10, b: 10 },
//   { a: 41, b: 1 },
//   { a: 0, b: 4 }
// ];
const filterArrExt = [];
export function filterAndExtendArrayItems(items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].a > 5) {
      filterArrExt.push({
        a: items[i].a,
        b: items[i].b,
        sum: items[i].a + items[i].b
      });
    }
  }
  return filterArrExt;
}
// Task 2 - merge arrays and remove duplicates
// const arNum  = [1, 2, 3, 4, 5, 6];
// const arNum2 = [1, 1, 3, 4];
// no Set() in use please :)
// return [...new Set([...array1, ...array2])]; // ok)))
export function mergeArraysWithoutDuplicates(array1, array2) {
  let uniq = [];
  array1.concat(array2).forEach((element) => {
    if (!uniq.includes(element)) uniq.push(element);
  });
  return uniq;
}

// Task 3 - write a function to check, if a word is a palindrome
// word length / 2

export function palindrome(word) {
  if (word === word.split("").reverse().join("")) {
    console.log(word + " - is the palindrome");
    return true;
  } else {
    console.log(word + " - is not the palindrome");
    return false;
  }
}

// Task 4 - write a function for n! (factorial) calculation
export function factorial(n) {
  let x = 1;
  for (let i = 1; i <= n; i++) {
    x *= i;
  }
  console.log(x);
  return x;
}
*/