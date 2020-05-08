const closure = function () {
    let count = 0;
    return function increment() {
      count++;
      return count;
    };
  };
  
  const incrementFn = closure();
  
  console.log(incrementFn());
  console.log(incrementFn());
  console.log(incrementFn());
  console.log(incrementFn());
  