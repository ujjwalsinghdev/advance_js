// caching

function addto80(n) {
    console.log("long time");
  
    return n + 80;
  }
  
  // console.log(addto80(8));
  // console.log(addto80(8));
  // console.log(addto80(8));
  // console.log(addto80(8));
  
  
  // Memoization
  
  let cache = {};
  function memoizeAddto80(n){
    if(n in cache){
      return cache[n];
    }
    else{
      console.log('long time ago');
      
      cache[n]=n+80;
      return cache[n];
    }
  }
  
  console.log('1',memoizeAddto80(5));
  console.log('2',memoizeAddto80(5));
  console.log('3',memoizeAddto80(8));
  console.log('4',memoizeAddto80(8));
  