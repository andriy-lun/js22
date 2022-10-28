// Task 1 - should return the string "Hello, World!"
//export function sayHelloWorld() {}

// Task 2 - should return the string "Hello, Somename!"
//export function sayHello(name) {}

// Task 3 - should return sum of two numbers
// a + b
//export function sumNumbers(a, b) {}

// Task 4 - should return a value by key in provided object
// provided object - { name: 'Name' }
// result - 'Name'
obj = { nic: 'Name' };
console.log(obj['nic']);

//export 
// function valueByKeyInObject(key, obj = {}) {
//     obj = {key: "Alice"};
//     return obj[key];
// }
// console.log(valueByKeyInObject());

// function extendObject(key, value, obj = {}) {
//     const newGirl = Object.assign({}, obj);
//     newGirl[key] = value;
//     return newGirl;
//   }
// console.log(extendObject);
// Task 5 - should return an object with new field and value
// without object - { name: 'Name' }
// with an object - { name: 'Name', age: 100 }
//export function extendObject(key, value, obj = {}) {}

// Task 6 - should return a larger argument increased by 100
// with (10, 7) output - 110
// with (10, 77) output - 177
//export function increaseBiggerArg(a, b) {}

// Task 7 - calculate the area of a figure using
// provided type: "square", "circle", or "rectangle"
// for circle "a" is radius
// for square only "a" needed
//export function calculateFigureArea(figureType, a, b) {}
// let figureType = 'square-';
// let a = 10;
// let b = 5;
function calculateFigureArea(figureType, a, b) {
// let a = 10;
// let b = 5;
// let figureType = 'square'
switch (figureType) {
  case 'circle': 
    console.log(Math.PI * a * a);
    return Math.PI * a * a;
    //break;
  case 'square':
    console.log(a * a);
    return a * a;
    //break;
  case 'rectangle':
    console.log(a * b);
    return a * b;
    //break;
  default:
    return console.log('enter correct figure');
}
};
calculateFigureArea('square', 10, 5);

//https://codesandbox.io/s/js-funcs-tasks-4-forked-csvlqp?file=/src/tasksWithFunctions.js:89-112
/*
// Task 1 - should return the string "Hello, World!"
export function sayHelloWorld() {
  return "Hello, World!";
}

// Task 2 - should return the string "Hello, Somename!"
export function sayHello(name) {
  return "Hello, " + name + "!";
}

// Task 3 - should return sum of two numbers
// a + b
export function sumNumbers(a, b) {
  return a + b;
}

// Task 4 - should return a value by key in provided object
// provided object - { name: 'Name' }
// result - 'Name'
export function valueByKeyInObject(key, obj = {}) {
  return obj[key];
}

// Task 5 - should return an object with new field and value
// without object - { name: 'Name' }
// with an object - { name: 'Name', age: 100 }
export function extendObject(key, value, obj = {}) {
  const newObj = Object.assign({}, obj);
  newObj[key] = value;
  return newObj;
}

// Task 6 - should return a larger argument increased by 100
// with (10, 7) output - 110
// with (10, 77) output - 177
export function increaseBiggerArg(a, b) {
  if (a >= b) {
    return a + 100;
  } else {
    return b + 100;
  }
}

// Task 7 - calculate the area of a figure using
// provided type: "square", "circle", or "rectangle"
// for circle "a" is radius
// for square only "a" needed

export function calculateFigureArea(figureType, a, b) {
  // const a = 10;
  // const b = 5;
  // const figureType = "circle";
  // if (figureType === "circle") {
  //   return Math.PI * a * a;
  // } else if (figureType === "square") {
  //   return a * a;
  // } else {
  //   return a * b;
  // }
  switch (figureType) {
    case "circle":
      return Math.PI * a * a;
    case "square":
      return a * a;
    case "rectangle":
      return a * b;
    default:
      return console.log("enter correct figure");
  }
}

*/