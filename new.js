const arr = [
  43, "what", 9, true, "cannot", false, "be", 3, true
 ];
function reverseArrayItems() {
    
    let revArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
      revArr.push(arr[i]);
    }
    return revArr;
  }
  reverseArrayItems(arr)
  console.log(reverseArrayItems());

  const myArray = [5, 2, 3];
 
myArray.sort(
  (curr, next) => {
    if (curr < next) {
      return -10000000000000000000000000000000000000000000000000000;
    }
  }
);
console.log(myArray);
