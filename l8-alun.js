let arrLowCase = ["string1", "string2"]
let arr = String(arrLowCase).toUpperCase().split(",");
console.log(arr);
//return arr;

let word = "letter";
let ch = "t";
function calculateLetters(string, letter) {
    let count = 0;
    console.log(count);
    for(var i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) {
        // if (string[i].includes(letter)) { - другий спосіб
            count++;
        };
    }    
    console.log(count);
    return count;
}
    calculateLetters (word, ch);

let slogan = 'I5like5JS'
function replaceNumbers(string) {
//     let noNumtr = "";
//     for(var i = 0; i < string.length-1; i++) {
//         noNumtr += string[i]
//         if ((string[i] - string[i]) === 0) {
//             string[i] = " ";
//         }
//     } 
    let noNum = string.split(""); //рядок - в масив
    for(var i = 0; i < noNum.length; i++) {
        if ((noNum[i] - noNum[i]) === 0) { //перевірка основана: "I" - "I" = NaN але "9" - "9" = 0
            noNum[i] = " ";  // заміна текстового числа на пробіл
        }
    }
    noNum = noNum.join("") //новий масив з пробілами замість чисел - в рядок
     console.log(noNum);
     return noNum;
}
replaceNumbers(slogan);

arr = ["osmos", "uterque", "water", "crop", "&", "swap", "cat", "brew", "Esmeralda"];
let idx = 1;
// result "star wars"
function buildStringUsingIndex(array, index) {
    let newWord = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i].length <= index) {//чи довжина слова в масиві <= заданого індекса в слові?
            newWord += array[i].charAt(index) + " ";// додаєм пробіл
        } else {newWord += array[i].charAt(index);}//інакше не додаєм
    }
console.log (newWord);
return newWord;
}
buildStringUsingIndex(arr, idx);

arr = ["let", "map", "array", "data"];
function sortArray() {
    // arr = arr.sort(function (a, b) {
    //   return a - b;
    // });
    arr.sort();
    return arr;
  }
  sortArray(arr);
  console.log(sortArray());

  /*
// Tasks 1 -  convert array of strings
// from lowercase to uppercase
export function convertToUppercase(array) {
  //let arr = String(array).toUpperCase().split(",");
  let arr = array.map((f) => {
    return f.toUpperCase();
  });
  return arr;
}

// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2
export function calculateLetters(string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      //or
      //if (string[i].includes(letter)) {
      count++;
    }
  }
  return count;
}

// Task 3 - replace numbers with spaces
// in the provided string
// 'I9like5JS' => 'I like JS'
export function replaceNumbers(string) {
  // let noNum = string.split("");
  // for (let i = 0; i < noNum.length; i++) {
  //   if (noNum[i] - noNum[i] === 0) {
  //     //"I" - "I" = NaN а "9" - "9" = 0
  //     noNum[i] = " ";
  //   }
  // }
  // noNum = noNum.join("");
  let noNum = string.replace(/\d+/g, " ");
  return noNum;
}

// Task 4 - sort strings in array
export function sortArray(array) {
  array.sort();
  return array;
}
//або довший код:
// array.sort(function(a, b){
//   var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
//   if (nameA < nameB)
//     return -1
//   if (nameA > nameB)
//     return 1
//   return 0
//   })

// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
// array - ["osmos", "uterque", "water", "crop",
//         "&", "swap", "cat", "brew", "Esmeralda"]
// index - 1
// result "start wars"
export function buildStringUsingIndex(array, index) {
  let newWord = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length <= index) {
      newWord += array[i].charAt(index) + " "; // додаєм пробіл
    } else {
      newWord += array[i].charAt(index);
    }
  }
  return newWord;
}

// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
export function palindromeValidator(str) {
  //if (str === str.split("").reverse().join("")) {
  let textRev = "";
  for (var i = str.length - 1; i >= 0; i--) {
    textRev += str[i];
  }
  if (str === textRev) {
    return "The string is palindrome";
  } else {
    return "The string is not palindrome";
  }
}

  */