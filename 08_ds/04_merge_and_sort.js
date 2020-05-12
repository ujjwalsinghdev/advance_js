// const arr = [12,3,4,24,6,7,8,9,0,1];

// arr.sort((a,b)=>a-b);

// console.log(arr);

function sortnow(arr1, arr2) {
    const merge = arr1.concat(arr2);
  
    merge.sort((a, b) => a - b);
  
    return merge;
  }
  