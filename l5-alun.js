// Task 1 - add next numbers to the 3, 4, 5, 6
const nums = [1, 2];
// write code just down below
nums.push(3,4,5,6);
console.log(nums);
// Task 2 - add new user Dmytro and his age is 18
const users = [
  {
    name: "Borys",
    age: 101
  }
];
users.push({name: 'Dmytro', age: 18});
console.log(users);

// write code just down below

// Task 3 - remove first 2 elements
const extraFirstNums = [101, 100, 1, 2, 3, 4];
// write code just down below
for (let i=0; i<2; i++){
    extraFirstNums.shift();
}
console.log(extraFirstNums);

// Task 4 - remove last 2 elements
const extraLastNums = [1, 2, 3, 4, 100, 101];
// write code just down below
for (let i=0; i<2; i++){
    extraLastNums.pop();
}
console.log(extraLastNums);

// Task 5- add 2 nums 0 and 1 at the start of array
const extraFirstElements = [2, 3, 4];
// write code just down below
extraFirstElements.unshift(0,1);
console.log(extraFirstElements);
// Task 6 - swap elements, that have indexes 0 and 3
const sortedArray = [4, 2, 3, 1];
// write code just down below
function swap (arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]]
}
swap(sortedArray,0,3);
console.log(sortedArray);
/*
export {
  nums,
  users,
  extraFirstNums,
  extraLastNums,
  extraFirstElements,
  sortedArray
};
https://codesandbox.io/s/js-array-entry-tasks-5-forked-uo4l8m?file=/src/arraysTasks.js

*/
