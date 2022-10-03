// Task 1 - add new fields name with value "Felix", and age - 7
const objWithNewFields = {};
// code here
objWithNewFields.name = 'Felix';
objWithNewFields.age = 7;
console.log(objWithNewFields);
// Task 1 - end

// Task 2 - add new field sum, that should contain sum of fields a + b
const objWithSum = {
    a: 10,
    b: 10
  };
  // code here
  objWithSum.sum = objWithSum.a + objWithSum.b
  console.log(objWithSum);
  // Tsk 2 - end
  
  // Task 3 - rewrite nums array with [2,3] array
  const objWithNums = {
    nums: [1]
  };
  // code here
objWithNums.nums = [2,3];
console.log(objWithNums);
  // Task 3 - end

  // add a new field "message" and set value "Hello, World!"
  const objWithMessage = {
    language: "JavaScript"
  };
  // code here
  objWithMessage.message = 'Hello, World!';
  console.log(objWithMessage);
  //export { objWithNewFields, objWithSum, objWithMessage, objWithNums };
  //https://codesandbox.io/s/js-object-tasks-3-forked-1hp9jc?file=/src/basicTasks.js