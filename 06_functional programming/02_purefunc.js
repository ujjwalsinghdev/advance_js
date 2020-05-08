const array = [1,2,4]

function removeLastItem(arr){
  const newArray = [].concat(arr);
  newArray.pop()
  return newArray
}


console.log(removeLastItem(array));

console.log(array);
