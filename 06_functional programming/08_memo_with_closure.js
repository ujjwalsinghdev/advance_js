// Memoization with closure

function memoizeAddto80(n) {
    let cache = {};
  
    return function (n) {
      if (n in cache) {
        return cache[n];
      } else {
        console.log("long time ago");
  
        cache[n] = n + 80;
        return cache[n];
      }
    };
  }
  
  const memoized = memoizeAddto80();
  
  
  console.log('1',memoized(5));
  console.log('2',memoized(6));
  console.log('3',memoized(8));
  
  
  // console.log("1", memoizeAddto80(5));
  // console.log("2", memoizeAddto80(5));
  // console.log("3", memoizeAddto80(8));
  // console.log("4", memoizeAddto80(8));
  